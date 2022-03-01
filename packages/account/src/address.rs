use std::str::FromStr;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{set_panic_hook, NativeAddress, NativeViewKey};

#[wasm_bindgen]
pub struct Address {
    address: String,
}

#[wasm_bindgen]
impl Address {
    #[wasm_bindgen]
    pub fn from_view_key(view_key: &str) -> Self {
        set_panic_hook();

        let view_key = NativeViewKey::from_str(view_key).unwrap();
        let address = NativeAddress::from_view_key(&view_key);

        Self {
            address: address.to_string(),
        }
    }

    #[wasm_bindgen]
    pub fn to_string(&self) -> String {
        self.address.to_string()
    }
}
