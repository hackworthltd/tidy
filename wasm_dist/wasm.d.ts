/* tslint:disable */
/* eslint-disable */
/**
*/
export enum WasmLayoutType {
  Basic,
  Tidy,
  LayeredTidy,
}
/**
*/
export class Tidy {
  free(): void;
/**
* @returns {number}
*/
  static null_id(): number;
/**
* @param {number} parent_child_margin
* @param {number} peer_margin
* @returns {Tidy}
*/
  static with_basic_layout(parent_child_margin: number, peer_margin: number): Tidy;
/**
* @param {number} parent_child_margin
* @param {number} peer_margin
* @returns {Tidy}
*/
  static with_tidy_layout(parent_child_margin: number, peer_margin: number): Tidy;
/**
* @param {number} parent_child_margin
* @param {number} peer_margin
* @returns {Tidy}
*/
  static with_layered_tidy(parent_child_margin: number, peer_margin: number): Tidy;
/**
* @param {number} layout_type
*/
  change_layout(layout_type: number): void;
/**
* @param {number} id
*/
  remove_node(id: number): void;
/**
* @returns {boolean}
*/
  is_empty(): boolean;
/**
* @param {number} id
* @param {number} width
* @param {number} height
* @param {number} parent_id
*/
  add_node(id: number, width: number, height: number, parent_id: number): void;
/**
* @param {Uint32Array} id
* @param {Float64Array} width
* @param {Float64Array} height
* @param {Uint32Array} parent_id
*/
  data(id: Uint32Array, width: Float64Array, height: Float64Array, parent_id: Uint32Array): void;
/**
*/
  layout(): void;
/**
* @returns {Float64Array}
*/
  get_pos(): Float64Array;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_tidy_free: (a: number) => void;
  readonly tidy_with_basic_layout: (a: number, b: number) => number;
  readonly tidy_with_tidy_layout: (a: number, b: number) => number;
  readonly tidy_with_layered_tidy: (a: number, b: number) => number;
  readonly tidy_change_layout: (a: number, b: number) => void;
  readonly tidy_remove_node: (a: number, b: number) => void;
  readonly tidy_is_empty: (a: number) => number;
  readonly tidy_add_node: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly tidy_data: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly tidy_layout: (a: number) => void;
  readonly tidy_get_pos: (a: number, b: number) => void;
  readonly tidy_null_id: () => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
