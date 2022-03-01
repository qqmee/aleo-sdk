import { Account } from '@qqmee/sdk-account-bundler';

const VIEW_KEY = 'AViewKey1hnw3jCfN8iXCwKmGpzjqsdBiv5iGQbJME3fJQ8nGV2Pr';

try {
  const account = Account.from_view_key(VIEW_KEY);

  document.body.innerHTML = `From 'view_key' ${VIEW_KEY} to 'address' ${account.to_address()}`;
} catch (e) {
  console.error(e);
  document.body.innerHTML = e;
}
