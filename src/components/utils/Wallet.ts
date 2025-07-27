import * as bip39 from 'bip39';

export const generateMnemonic = (): string => {
  const mnemonic = bip39.generateMnemonic(); // default: 128-bit entropy = 12 words
  return mnemonic;
};

console.log(generateMnemonic());