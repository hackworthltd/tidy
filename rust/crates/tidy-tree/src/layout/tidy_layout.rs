use std::ptr::NonNull;

use crate::{geometry::Coord, node::TidyData, utils::nocheck_mut, Layout, Node};

use super::linked_y_list::LinkedYList;

pub struct TidyLayout {
    pub parent_child_margin: Coord,
    pub peer_margin: Coord,
}

impl TidyLayout {
    pub fn new(parent_child_margin: Coord, peer_margin: Coord) -> Self {
        TidyLayout {
            parent_child_margin,
            peer_margin,
        }
    }
}

struct Contour {
    is_left: bool,
    current: Option<NonNull<Node>>,
    modifier_sum: Coord,
}

impl Contour {
    pub fn new(is_left: bool, current: &Node) -> Self {
        Contour {
            is_left,
            current: Some(current.into()),
            modifier_sum: current.tidy.as_ref().unwrap().modifier_to_subtree,
        }
    }

    pub fn left(&self) -> Coord {
        let node = self.node();
        self.modifier_sum + node.relative_x
    }

    fn node(&self) -> &Node {
        match self.current {
            Some(node) => {
                let node = unsafe { node.as_ref() };
                node
            }
            None => panic!(),
        }
    }

    pub fn is_none(&self) -> bool {
        self.current.is_none()
    }

    pub fn right(&self) -> Coord {
        let node = self.node();
        node.width + self.modifier_sum + node.relative_x
    }

    pub fn bottom(&self) -> Coord {
        match self.current {
            Some(node) => {
                let node = unsafe { node.as_ref() };
                node.y + node.height
            }
            None => 0.,
        }
    }

    pub fn next(&mut self) {
        if let Some(mut current) = self.current {
            let node = unsafe { current.as_mut() };
            self.modifier_sum += node.tidy.as_ref().unwrap().modifier_to_subtree;
            if self.is_left {
                if node.children.len() > 0 {
                    self.current = Some((&*node.children[0]).into());
                } else {
                    self.modifier_sum += node.tidy.as_ref().unwrap().modifier_thread_left;
                    self.current = node.tidy.as_ref().unwrap().thread_left;
                }
            } else {
                if node.children.len() > 0 {
                    self.current = Some((&*node.children[node.children.len() - 1]).into());
                } else {
                    self.modifier_sum += node.tidy.as_ref().unwrap().modifier_thread_right;
                    self.current = node.tidy.as_ref().unwrap().thread_right;
                }
            }
        }
    }
}

impl Node {
    fn set_extreme(&mut self) {
        let self_ptr: NonNull<Node> = (self as &Self).into();
        let mut tidy = self.tidy.as_mut().unwrap();
        if self.children.len() == 0 {
            tidy.extreme_left = Some(self_ptr);
            tidy.extreme_right = Some(self_ptr);
            tidy.modifier_extreme_left = 0.;
            tidy.modifier_extreme_right = 0.;
        } else {
            let first = self.children.first().unwrap().tidy.as_ref().unwrap();
            tidy.extreme_left = first.extreme_left;
            tidy.modifier_extreme_left = first.modifier_to_subtree + first.modifier_extreme_left;
            let last = self.children.last().unwrap().tidy.as_ref().unwrap();
            tidy.extreme_right = last.extreme_right;
            tidy.modifier_extreme_right = last.modifier_to_subtree + last.modifier_extreme_right;
        }
    }

    fn extreme_left(&mut self) -> &mut Node {
        unsafe {
            self.tidy
                .as_mut()
                .unwrap()
                .extreme_left
                .as_mut()
                .unwrap()
                .as_mut()
        }
    }

    fn extreme_right(&mut self) -> &mut Node {
        unsafe {
            self.tidy
                .as_mut()
                .unwrap()
                .extreme_right
                .as_mut()
                .unwrap()
                .as_mut()
        }
    }

    fn position_root(&mut self) {
        let first = self.children.first().unwrap();
        let first_child_pos = first.relative_x + first.tidy().modifier_to_subtree;
        let last = self.children.last().unwrap();
        let last_child_pos = last.relative_x + last.tidy().modifier_to_subtree;
        self.relative_x = (first_child_pos + last_child_pos) / 2.;
    }

    fn add_child_spacing(&mut self) {
        let mut speed = 0.;
        let mut delta = 0.;
        for child in &mut self.children.iter_mut() {
            let child = child.tidy_mut();
            speed += child.shift_acceleration;
            delta += speed + child.shift_change;
            child.modifier_to_subtree += delta;
        }
    }
}

impl TidyLayout {
    fn separate(
        &mut self,
        node: &mut Node,
        child_index: usize,
        mut y_list: LinkedYList,
    ) -> LinkedYList {
        // right contour of the left
        let mut left = Contour::new(false, &node.children[0]);
        // left contour of the right
        let mut right = Contour::new(true, &node.children[node.children.len() - 1]);
        while !left.is_none() && !right.is_none() {
            if left.bottom() > y_list.bottom() {
                y_list = y_list.pop().unwrap();
            }

            let dist = left.right() - right.left() - self.peer_margin;
            if dist > 0. {
                // left contour is too wide, so we move it
                left.modifier_sum += dist;
                self.move_subtree(node, child_index, y_list.index, dist);
            }

            let left_bottom = left.bottom();
            let right_bottom = right.bottom();
            if left_bottom <= right_bottom {
                left.next();
            }
            if right_bottom >= left_bottom {
                right.next();
            }
        }

        if left.is_none() && !right.is_none() {
            self.set_left_thread(node, child_index, right.node(), right.modifier_sum);
        } else if !left.is_none() && right.is_none() {
            self.set_right_thread(node, child_index, left.node(), left.modifier_sum);
        }

        y_list
    }

    fn set_left_thread(
        &mut self,
        node: &mut Node,
        current_index: usize,
        target: &Node,
        modifier: Coord,
    ) {
        let first = nocheck_mut!(node.children[0]);
        let current = &mut node.children[current_index];
        let diff = modifier
            - first.tidy_mut().modifier_extreme_left
            - first.tidy_mut().modifier_to_subtree;
        first.extreme_left().tidy_mut().thread_left = Some(target.into());
        first.extreme_left().tidy_mut().modifier_thread_left = diff;
        first.tidy_mut().extreme_left = current.tidy_mut().extreme_left;
        first.tidy_mut().modifier_extreme_left = current.tidy_mut().modifier_extreme_left
            + current.tidy_mut().modifier_to_subtree
            - first.tidy_mut().modifier_to_subtree;
    }

    fn set_right_thread(
        &mut self,
        node: &mut Node,
        current_index: usize,
        target: &Node,
        modifier: Coord,
    ) {
        let current = nocheck_mut!(node.children[current_index]);
        let diff = modifier
            - current.tidy_mut().modifier_extreme_right
            - current.tidy_mut().modifier_to_subtree;
        current.extreme_right().tidy_mut().thread_right = Some(target.into());
        current.extreme_right().tidy_mut().modifier_thread_right = diff;
        let prev = node.children[current_index - 1].tidy_mut();
        current.tidy_mut().extreme_right = prev.extreme_right;
        current.tidy_mut().modifier_extreme_right = prev.modifier_extreme_right
            + prev.modifier_to_subtree
            - current.tidy_mut().modifier_to_subtree;
    }

    fn move_subtree(
        &self,
        node: &mut Node,
        current_index: usize,
        from_index: usize,
        distance: Coord,
    ) {
        let child = &mut node.children[current_index];
        let mut child_tidy = child.tidy_mut();
        child_tidy.modifier_to_subtree += distance;

        // distribute extra space to nodes between from_index to current_index
        if from_index != current_index - 1 {
            let index_diff = (current_index - from_index) as Coord;
            node.children[from_index + 1].tidy_mut().shift_acceleration += distance / index_diff;
            node.children[current_index].tidy_mut().shift_acceleration -= distance / index_diff;
            node.children[current_index].tidy_mut().shift_change -=
                distance - distance / index_diff;
        }
    }

    fn set_y(&self, root: &mut Node) {
        root.pre_order_traversal_mut(|node| {
            node.y = if let Some(parent) = node.parent {
                let parent_bottom = unsafe { parent.as_ref().bottom() };
                parent_bottom + self.parent_child_margin
            } else {
                0.
            };
        });
    }

    fn first_walk(&mut self, node: &mut Node) {
        if node.tidy.is_none() {
            node.tidy = Some(Box::new(TidyData {
                extreme_left: None,
                extreme_right: None,
                shift_acceleration: 0.,
                shift_change: 0.,
                modifier_to_subtree: 0.,
                modifier_extreme_left: 0.,
                modifier_extreme_right: 0.,
                thread_left: None,
                thread_right: None,
                modifier_thread_left: 0.,
                modifier_thread_right: 0.,
            }));
        }

        if node.children.len() == 0 {
            node.set_extreme();
            return;
        }

        self.first_walk(node.children.first_mut().unwrap());
        let mut y_list = LinkedYList::new(0, node.children[0].extreme_left().bottom());
        for i in 1..node.children.len() {
            let current_child = node.children.get_mut(i).unwrap();
            self.first_walk(current_child);
            let max_y = current_child.extreme_left().bottom();
            y_list = self.separate(node, i, y_list);
            y_list = y_list.update(i, max_y);
        }

        node.position_root();
        node.set_extreme();
    }

    fn second_walk(&mut self, node: &mut Node, mut mod_sum: Coord) {
        mod_sum += node.tidy_mut().modifier_to_subtree;
        node.x = node.relative_x + mod_sum;
        node.add_child_spacing();

        for child in node.children.iter_mut() {
            self.second_walk(child, mod_sum);
        }
    }
}

impl Layout for TidyLayout {
    fn layout(&mut self, root: &mut Node) {
        self.set_y(root);
        self.first_walk(root);
        self.second_walk(root, 0.);
    }

    fn partial_layout(
        &mut self,
        root: &mut crate::Node,
        changed: &[std::ptr::NonNull<crate::Node>],
    ) {
        todo!()
    }
}
