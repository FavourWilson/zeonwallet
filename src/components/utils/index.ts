import { ArbitrumIcon, BaseIcon, CryptoIcon, EthereumIcon, ShieldIcon, TronIcon, USDCIcon, USDTIcon, ZeonIcon } from "../../assets";
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
    href: 'receive'
  },
  {
    name:"Send",
    icon: GrSend,
    href: 'send'
  },
  {
    name:"Swap",
    icon: TbExchange,
    href: 'swap'
  },
  {
    name:"Buy",
    icon: FaDollarSign,
    href: 'buy'
  },
]

export const NativeWalletData = [
  {
    id:1,
    network: "Ethereum",
    coinImg: EthereumIcon,
    balance: 0.0267,
    Equivalent: 100
  },
  {
    id:2,
    network: "Arbitrum",
    coinImg: ArbitrumIcon,
    balance: 200,
    Equivalent: 93
  },
  {
    id:3,
    network: "Base",
    coinImg: BaseIcon,
    balance: 2000,
    Equivalent: 1320
  },
  {
    id:4,
    network: "Tron",
    coinImg: TronIcon,
    balance: 200 ,
    Equivalent: 62.60
  },
]

export const StableWalletData = [
  {
    id:1,
    network: "Tether Dollar",
    coinImg: USDTIcon,
    balance: 100,
    Equivalent: 100
  },
  {
    id:2,
    network: "US Dollar Currency",
    coinImg: USDCIcon,
    balance: 400,
    Equivalent: 100
  },
  {
    id:2,
    network: "Tron",
    coinImg: USDTIcon,
    balance: 400,
    Equivalent: 100
  },
]