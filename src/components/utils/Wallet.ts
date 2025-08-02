import bip39 from 'bip39-light';
import { ethers } from "ethers";

export const generateMnemonic = (): string => {
    return bip39.generateMnemonic();
};

export const validateMnemonic = (mnemonic: string): boolean => {
    return bip39.validateMnemonic(mnemonic);
};

export const getWalletFromMnemonic = (mnemonic: string) => {
    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    return wallet;  // {address, privateKey, etc.}
};