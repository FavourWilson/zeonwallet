import type { MnemonicWord } from "./WalletProvider";

export interface WalletContextType {
    mnemonic: MnemonicWord[];
    address: string | null;
    encryptedPrivateKey: string | null;
    setMnemonic: React.Dispatch<React.SetStateAction<MnemonicWord[]>>;
    setAddress: (address: string) => void;
    setEncryptedPrivateKey: (key: string) => void;
}