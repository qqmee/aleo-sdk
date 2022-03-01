use rand::{rngs::StdRng, SeedableRng};
use rand_chacha::ChaChaRng;
use std::str::FromStr;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{address::Address, set_panic_hook, NativeAccount, NativePrivateKey};

#[wasm_bindgen]
pub struct Account {
    pub(crate) private_key: Option<String>,
    pub(crate) view_key: String,
    pub(crate) address: String,
}

#[wasm_bindgen]
impl Account {
    #[wasm_bindgen(constructor)]
    pub fn new(seed: Option<u64>) -> Self {
        set_panic_hook();

        let account = match seed {
            Some(seed) => NativeAccount::new(&mut ChaChaRng::seed_from_u64(seed)),
            None => NativeAccount::new(&mut StdRng::from_entropy()),
        };

        Self {
            private_key: Some(account.private_key().to_string()),
            view_key: account.view_key().to_string(),
            address: account.address().to_string(),
        }
    }

    #[wasm_bindgen]
    pub fn from_private_key(private_key: &str) -> Self {
        let private_key = NativePrivateKey::from_str(private_key).unwrap();
        let account = NativeAccount::from(private_key);

        Self {
            private_key: Some(account.private_key().to_string()),
            view_key: account.view_key().to_string(),
            address: account.address().to_string(),
        }
    }

    #[wasm_bindgen]
    pub fn from_view_key(view_key: &str) -> Self {
        let address = Address::from_view_key(view_key);

        Self {
            private_key: None,
            view_key: view_key.to_string(),
            address: address.to_string(),
        }
    }

    #[wasm_bindgen]
    pub fn to_private_key(&self) -> Option<String> {
        self.private_key.clone()
    }

    #[wasm_bindgen]
    pub fn to_view_key(&self) -> String {
        self.view_key.clone()
    }

    #[wasm_bindgen]
    pub fn to_address(&self) -> String {
        self.address.clone()
    }
}
