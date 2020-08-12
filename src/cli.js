const bip39 = require('bip39');

import {
  DEFAULT_COUNT,
  parseCount,
  convertCountToStrength,
} from './util.js';

export function cli(args) {
  const countStr = args && args[2];
  const count = countStr ? parseCount(countStr) : DEFAULT_COUNT;
  const strength = convertCountToStrength(count);
  const m = bip39.generateMnemonic(strength);
  console.log(m);
}
