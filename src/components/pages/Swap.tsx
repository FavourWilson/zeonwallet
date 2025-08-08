import { IoIosArrowBack } from "react-icons/io"
import Typography from "../atoms/Typography"
import DashboardLayout from "../layout/DashboardLayout"
import Header from "../molecules/Header"
import { useNavigate } from "react-router"
import Input from "../atoms/Input"
import { getAllNetworkData } from "../utils"
import { useWallet } from "../context/WalletProvider"
import { useWalletBalances } from "../utils/useWalletBalances"
import { useEffect, useState } from "react"
import { RiExchange2Line } from "react-icons/ri";
import Button from "../molecules/Button"
import { ethers, type Eip1193Provider } from "ethers"
import { getTokenAddress, performSwap, UNISWAP_ROUTER_ADDRESS } from "../utils/helper"


declare global {
    interface Window {
        ethereum?: Eip1193Provider;
    }
}

const Swap = () => {
    const navigate = useNavigate()
    const { address } = useWallet();
    const { nativeBalances, stableBalances } = useWalletBalances(address ?? "");
    const allNetworks = getAllNetworkData(nativeBalances, stableBalances, address ?? "");

    const [fromToken, setFromToken] = useState(allNetworks[0]?.network || "");
    const [toToken, setToToken] = useState(allNetworks[1]?.network || "");
    const [fromAmount, setFromAmount] = useState("");
    const [toAmount, setToAmount] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const getSwapRate = (from: string, to: string) => {
        // Mock exchange rates (You’ll later integrate Coingecko or Dex Aggregator)
        if (from === "ETH" && to === "USDT") return 3000;
        if (from === "USDT" && to === "ETH") return 1 / 3000;
        if (from === "USDT" && to === "USDC") return 1;
        return 1;
    };
    useEffect(() => {
        if (fromAmount && fromToken && toToken) {
            const rate = getSwapRate(fromToken, toToken);  // Mock function for now
            setToAmount((parseFloat(fromAmount) * rate).toFixed(4));
        }
    }, [fromAmount, fromToken, toToken]);

   const handleSwap = async () => {
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
        const provider = new ethers.BrowserProvider(window.ethereum!);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const senderAddress = await signer.getAddress();

        // 1. Approve token if ERC20
        if (fromToken !== "ETH") {
            const tokenContract = new ethers.Contract(
                getTokenAddress(fromToken),
                [
                    "function approve(address spender, uint256 amount) public returns (bool)"
                ],
                signer
            );

            const approveTx = await tokenContract.approve(
                UNISWAP_ROUTER_ADDRESS,
                ethers.parseUnits(fromAmount, 6) // assuming 6 decimals like USDT/USDC
            );
            await approveTx.wait();
        }

        // 2. Execute Swap (simplified example, you'd plug into a Router)
        const swapTx = await performSwap(signer, fromToken, toToken, fromAmount, senderAddress);
        await swapTx.wait();

        setSuccessMessage(`Swapped ${fromAmount} ${fromToken} to ${toToken} successfully!`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        console.error(err);
        setErrorMessage(err.message || "Swap failed.");
    } finally {
        setIsLoading(false);
    }
};

    return (
        <DashboardLayout>
            <Header />
            <div className="border-t-2 border-white"></div>
            <div className="flex items-center">
                <IoIosArrowBack size={22} color="white" onClick={() => navigate(-1)} />
                <Typography value={"Heading"} className="flex-1 translate-x-20" size={14}>
                    Swap
                </Typography>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">

                <div className="bg-secondary rounded-lg w-80 h-20 flex justify-between items-center p-3">
                    <div className="flex flex-col justify-start items-start">
                        <Typography value={"content"} size={16} className="font-bold">
                            From
                        </Typography>
                        <Input
                            name="fromAmount"
                            placeholder="0"
                            value={fromAmount}
                            onChange={(e) => setFromAmount(e.target.value)}
                            className="outline-0 border-none text-lg text-white"
                        />                    </div>
                    <select
                        value={fromToken}
                        onChange={(e) => setFromToken(e.target.value)}
                        className="w-full p-3 border-none rounded-lg text-white"
                    >
                        {allNetworks.map((token) => (
                            <option key={token.id} value={token.network}>
                                {token.network}
                            </option>
                        ))}
                    </select>
                </div>
                <RiExchange2Line color="white" size={32} />
                <div className="bg-secondary rounded-lg w-80 h-20 flex justify-between items-center p-3">
                    <div className="flex flex-col justify-start items-start">
                        <Typography value={"content"} size={16} className="font-bold">
                            To
                        </Typography>
                        <Input
                            name="toAmount"
                            placeholder="0"
                            value={toAmount}
                            onChange={(e) => setToAmount(e.target.value)}
                            className="outline-0 border-none text-lg text-white"
                        />                    </div>
                    <select
                        value={toToken}
                        onChange={(e) => setToToken(e.target.value)}
                        className="w-full p-3 border-none rounded-lg text-white"
                    >
                        {allNetworks.map((token) => (
                            <option key={token.id} value={token.network}>
                                {token.network}
                            </option>
                        ))}
                    </select>
                </div>
                {isLoading && (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl text-black">
            Processing transaction...
        </div>
    </div>
)}

{successMessage && (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-green-500 p-6 rounded-xl text-white">
            {successMessage}
            <button onClick={() => setSuccessMessage("")} className="ml-4 underline">Close</button>
        </div>
    </div>
)}


{errorMessage && (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-red-500 p-6 rounded-xl text-white">
            {errorMessage}
            <button onClick={() => setErrorMessage("")} className="ml-4 underline">Close</button>
        </div>
    </div>
)}

                <Button variant={"filled"} width={200} value={"Swap"} onClick={handleSwap} />
            </div>
        </DashboardLayout>
    )
}

export default Swap
