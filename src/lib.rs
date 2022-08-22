// #![feature(proc_macro, wasm_custom_section, wasm_import_module)]

pub mod parser;

extern crate wasm_bindgen;

extern crate console_error_panic_hook;

use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn parse(input: &str) -> String {
    std::panic::set_hook(Box::new(console_error_panic_hook::hook));
    let result = parser::parse(input.to_string());

    // log(&result);
    result
}

#[wasm_bindgen]
pub fn add(input: u32, input2: u32) -> u32 {
    input + input2
}
