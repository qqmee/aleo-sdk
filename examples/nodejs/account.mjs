import { Account } from '@qqmee/sdk-account-nodejs';
import { print } from './helpers/print.mjs';

const P_KEY = 'APrivateKey1zkpEhLKtXRd22nevhhBjB3SecN5NDQtRLWGVsXcyUZSP8Ks';
const VIEW_KEY = 'AViewKey1hnw3jCfN8iXCwKmGpzjqsdBiv5iGQbJME3fJQ8nGV2Pr';

/// -----------------------------------
/// [1] Create a new account
/// -----------------------------------
console.log('[1] create a new account');
print(new Account());

/// -----------------------------------
/// [2] Create a new account from seed
/// -----------------------------------
console.log(`\n[2] create account from bigint seed '123456n' for address '..nqqqp309ry'`);
print(new Account(123456n));

/// -----------------------------------
/// [3] Convert view_key to account
/// -----------------------------------
console.log(`\n[3] convert view_key '${VIEW_KEY}' to account`);
print(Account.from_view_key(VIEW_KEY));

/// -----------------------------------
/// [4] Convert private_key to account
/// -----------------------------------
console.log(`\n[4] convert private_key '${P_KEY}' to account`);
print(Account.from_private_key(P_KEY));
