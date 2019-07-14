const bip39 = require('bip39')

export function cli(args) {
  const m = bip39.generateMnemonic();
  console.log(m);
}
