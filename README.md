# SDK for aleo blockchain

Maintainer [aleochain.io](https://aleochain.io) team.

SDK package size has been greatly reduced compared to [@aleohq/sdk](https://www.npmjs.com/package/@aleohq/sdk) (> 1.45 MiB). Less features.
Based on `testnet3` branch.

| Package (.wasm)                                                                        |  Size   | Gzip (6 lvl) | Brotli (6 lvl) |
| -------------------------------------------------------------------------------------- | :-----: | :----------: | :------------: |
| [@aleohq/sdk](https://www.npmjs.com/package/@aleohq/sdk)                               |  3 MiB  |    2 MiB     |    1.45 MiB    |
| [@qqmee/sdk-account-nodejs](https://www.npmjs.com/package/@qqmee/sdk-account-nodejs)   | 176 KiB |    66 KiB    |     59 KiB     |
| [@qqmee/sdk-account-web](https://www.npmjs.com/package/@qqmee/sdk-account-web)         |    ^    |      ^       |       ^        |
| [@qqmee/sdk-account-bundler](https://www.npmjs.com/package/@qqmee/sdk-account-bundler) |    ^    |      ^       |       ^        |

Features

- create a new acccount
- from private key
- from view key
- from seed

## Examples

They [here](./examples)

## Install rust (archlinux)

```bash
pacman -S rustup wasm-pack
rustup update stable --force
```

## Install nodejs

Follow https://github.com/nvm-sh/nvm#installing-and-updating

```bash
nvm install --lts # or 16
```

## How to build

Example for `account` package

### Download

```bash
git clone https://github.com/qqmee/aleo-sdk && cd aleo-sdk/packages/account
```

### Build

```bash
wasm-pack build --scope qqmee --features console_error_panic_hook --target nodejs # or web
```

## How to run examples

Use `wasm-pack` as mentioned above before launch

```bash
cd examples
npm i
node account.mjs
```
