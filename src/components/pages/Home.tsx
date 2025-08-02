import { useEffect, useState } from "react"
import DashboardLayout from "../layout/DashboardLayout"
import Header from "../molecules/Header"
import WalletBalance from "../molecules/WalletBalance"
import ListWalletBalance from "../organisms/ListWalletBalance"
import TransactionMenu from "../organisms/TransactionMenu"
import { getStableBalance, getNativeBalance } from "../utils/getTokenBalances";
import { ArbitrumIcon, BaseIcon, EthereumIcon, USDCIcon, USDTIcon } from "../../assets"
import { useWalletBalances } from "../utils/useWalletBalances"
import { useWallet } from "../context/WalletProvider"

const Home = () => {
  const { address } = useWallet();
      const { nativeBalances, stableBalances, } = useWalletBalances(address ?? "");

    const [nativeData, setNativeData] = useState([
  { id: 1, network: "Ethereum", balance: parseFloat(nativeBalances.ethereum) || 0, Equivalent: 0, logo: EthereumIcon },
  { id: 2, network: "Base", balance: parseFloat(nativeBalances.base) || 0, Equivalent: 0, logo: BaseIcon },
  { id: 3, network: "Arbitrum", balance: parseFloat(nativeBalances.arbitrum) || 0, Equivalent: 0, logo: ArbitrumIcon },
]);

const [stableData, setStableData] = useState([
  { id: 1, network: "USDT", balance: parseFloat(stableBalances.usdt) || 0, Equivalent: 0, logo: USDTIcon },
  { id: 2, network: "USDC", balance: parseFloat(stableBalances.usdc) || 0, Equivalent: 0, logo: USDCIcon },
]);

  const [totalBalance, setTotalBalance] = useState("0.00");

 useEffect(() => {
    const fetchBalances = async () => {
      if (address) {
        const [tokenBalances, nativeBalance] = await Promise.all([
          getStableBalance(address),
          getNativeBalance(address)
        ]);

        const updatedNative = nativeData.map((item) => {
          if (item.network === "Ethereum") {
            return { ...item, balance: parseFloat(nativeBalance.ethereum), Equivalent: parseFloat(nativeBalance.ethereum) * 3000 };
          }
          if (item.network === "Base") {
            return { ...item, balance: parseFloat(nativeBalance.base), Equivalent: parseFloat(nativeBalance.base) * 2 };
          }
          if (item.network === "Arbitrum") {
            return { ...item, balance: parseFloat(nativeBalance.arbitrum), Equivalent: parseFloat(nativeBalance.arbitrum) * 1.2 };
          }
          return item;
        });

        const updatedStable = stableData.map((item) => {
          if (item.network === "USDT") {
            return { ...item, balance: parseFloat(tokenBalances.usdt), Equivalent: parseFloat(tokenBalances.usdt) };
          }
          if (item.network === "USDC") {
            return { ...item, balance: parseFloat(tokenBalances.usdc), Equivalent: parseFloat(tokenBalances.usdc) };
          }
          return item;
        });

        setNativeData(updatedNative);
        setStableData(updatedStable);

        const total = [...updatedNative, ...updatedStable].reduce((acc, curr) => acc + curr.Equivalent, 0);
        setTotalBalance(total.toFixed(2));
      }
    };

    fetchBalances();
  }, [address, nativeData, stableData]); 
 
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <Header />
        <WalletBalance totalBalance={totalBalance}/>
        <TransactionMenu />
        <ListWalletBalance nativeData={nativeData} stableData={stableData}/>
      </div>
    </DashboardLayout>
  )
}

export default Home
