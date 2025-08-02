import { useContext, useState, type ReactNode } from "react";
import { WalletContext } from "./WalletContext";

export type MnemonicWord = {
  id: number;
  name: string;
};
export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const [mnemonic, setMnemonic] = useState<MnemonicWord[]>([]);
    const [address, setAddress] = useState<string | null>(null);
    const [encryptedPrivateKey, setEncryptedPrivateKey] = useState<string | null>(null);

    return (
        <WalletContext.Provider value={{ mnemonic, address, encryptedPrivateKey, setMnemonic, setAddress, setEncryptedPrivateKey }}>
            {children}
        </WalletContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWallet = () => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
};