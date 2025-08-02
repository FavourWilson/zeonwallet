// context/WalletContext.tsx
import { createContext  } from "react";
import type { WalletContextType } from "./walletTypes";


export const WalletContext = createContext<WalletContextType | undefined>(undefined);


