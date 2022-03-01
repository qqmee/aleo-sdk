pub mod account;
pub use account::*;

pub mod address;
pub use address::*;

use snarkvm_wasm::testnet2::Testnet2;
use snarkvm_wasm::{Account, Address, PrivateKey, ViewKey};

pub type NativeAccount = Account<Testnet2>;
pub type NativeAddress = Address<Testnet2>;
pub type NativePrivateKey = PrivateKey<Testnet2>;
pub type NativeViewKey = ViewKey<Testnet2>;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

pub fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}
