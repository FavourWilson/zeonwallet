import { ArbitrumIcon, BaseIcon, CryptoIcon, EthereumIcon, ShieldIcon,  USDCIcon, USDTIcon, ZeonIcon } from "../../assets";
import { BsQrCode } from "react-icons/bs";
import { GrSend } from "react-icons/gr";
import { TbExchange } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";

export const Slides = [
  {
    id:1,
    image: {
      width: 200,
      value: 'base', // or 'MD', 'LG', etc. if you're using your switch cases
      src: ZeonIcon,
    },
    title: 'Welcome To Zeon Wallet',
    subtitle: 'Take full control of your digital assets with fast, secure, multi-chain access.',
  },
  {
    id:2,
    image: {
      width: 200,
      value: 'base', // or 'MD', 'LG', etc. if you're using your switch cases
      src: CryptoIcon,
    },
    title: 'Do More Than Just Hold',
    subtitle: 'Send crypto, stake tokens, access layer-2 chains—without leaving your wallet.',
  },
  {
    id:3,
    image: {
      width: 200,
      value: 'base', // or 'MD', 'LG', etc. if you're using your switch cases
      src: ShieldIcon,
    },
    title: 'Your Security Is Non-Negotiable',
    subtitle: 'No seed phrase? No stress. You retain your seed-less key with built-in fraud protection.',
  },
]as const;
       

export const MnemonicData = [
    {
        id: 1,
        name: "vintage"
    },
    {
        id: 2,
        name: "obscure"
    },
    {
        id: 3,
        name: "slab"
    },
    {
        id: 4,
        name: "bundle"
    },
    {
        id: 5,
        name: "twin"
    },
    {
        id: 6,
        name: "garment"
    },
    {
        id: 7,
        name: "slice"
    },
    {
        id: 8,
        name: "curtain"
    },
    {   
        id: 9,
        name: "walnut"
    },
    {
        id: 10,
        name: "zebra"
    },
    {
        id: 11,
        name: "assist"
    },
    {
        id: 12,
        name: "aspect"
    },
]



export const MenuData = [
  {
    name:"Receive",
    icon: BsQrCode,
    href: '/all-networks',
    action: 'receive'
  },
  {
    name:"Send",
    icon: GrSend,
    href: '/all-networks',
    action: 'send'
  },
  {
    name:"Swap",
    icon: TbExchange,
    href: '/swap'
  },
  {
    name:"Buy",
    icon: FaDollarSign,
    href: '/buy'
  },
]




export const getAllNetworkData = (nativeBalances: { ethereum: string | number; arbitrum: string | number; base: string | number; }, stableBalances: { usdt: string | number; usdc: string | number; }, walletAddress: string) => {
    return [
        {
            id: 1,
            network: "Ethereum",
            coinImg: EthereumIcon,
            balance: parseFloat(nativeBalances.ethereum as string) || 0,
            type: "Native",
            walletAddress
        },
        {
            id: 2,
            network: "Arbitrum",
            coinImg: ArbitrumIcon,
            balance: parseFloat(nativeBalances.arbitrum as string) || 0,
            type: "Native",
            walletAddress
        },
        {
            id: 3,
            network: "Base",
            coinImg: BaseIcon,
            balance: parseFloat(nativeBalances.base as string) || 0,
            type: "Native",
            walletAddress
        },
        {
            id: 4,
            network: "Ethereum",
            coinImg: USDTIcon,
            balance: parseFloat(stableBalances.usdt as string) || 0,
            type: "Stable",
            walletAddress
        },
        {
            id: 5,
            network: "Base",
            coinImg: USDCIcon,
            balance: parseFloat(stableBalances.usdc as string) || 0,
            type: "Stable",
            walletAddress
        }
    ];
};



export const getNativeData = (nativeBalances: { ethereum: string | number; base: string | number; arbitrum: string | number; }, walletAddress: string) => {
    return [
        { id: 1, network: "Ethereum", balance: parseFloat(nativeBalances.ethereum as string) || 0, Equivalent: 0, logo: EthereumIcon, walletAddress },
        { id: 2, network: "Base", balance: parseFloat(nativeBalances.base as string) || 0, Equivalent: 0, logo: BaseIcon, walletAddress },
        { id: 3, network: "Arbitrum", balance: parseFloat(nativeBalances.arbitrum as string) || 0, Equivalent: 0, logo: ArbitrumIcon,  walletAddress },
    ];
};

export const getStableData = (stableBalances: { usdt: string | number; usdc: string | number; }, walletAddress: string) => {
    return [
        { id: 1, network: "USDT", balance: parseFloat(stableBalances.usdt as string) || 0, Equivalent: 0, logo: USDTIcon, walletAddress },
        { id: 2, network: "USDC", balance: parseFloat(stableBalances.usdc as string) || 0, Equivalent: 0, logo: USDCIcon,walletAddress },
    ];
};
