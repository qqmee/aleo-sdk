import { Address } from '@qqmee/sdk-account-nodejs';

const VIEW_KEY = 'AViewKey1hnw3jCfN8iXCwKmGpzjqsdBiv5iGQbJME3fJQ8nGV2Pr';

/// -----------------------------------
/// [1] Convert view_key to address
/// -----------------------------------
console.log(`[1] convert view_key '${VIEW_KEY}' to address`);
const address = Address.from_view_key(VIEW_KEY);

console.log(address.to_string());
