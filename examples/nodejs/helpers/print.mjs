import { Account } from '@qqmee/sdk-account-nodejs';

/**
 * @param {Account} account
 */
export function print(account) {
  console.log({
    private_key: account.to_private_key(),
    view_key: account.to_view_key(),
    address: account.to_address(),
  });
}
