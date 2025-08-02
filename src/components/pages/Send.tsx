import { IoIosArrowBack } from "react-icons/io"
import DashboardLayout from "../layout/DashboardLayout"
import Header from "../molecules/Header"
import Typography from "../atoms/Typography"
import { useNavigate, useParams } from "react-router"
import Input from "../atoms/Input"
import Button from "../molecules/Button"
import Imagesize from "../atoms/Imagesize"
import { getAllNetworkData } from "../utils"
import { useWalletBalances } from "../utils/useWalletBalances"
import { useWallet } from "../context/WalletProvider"
import { useCallback, useEffect, useState } from "react"
import { ethers } from 'ethers';

const Send = () => {
    const { address } = useWallet();
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
    const [selectedToken, setSelectedToken] = useState("ETH");
    const [estimatedGas, setEstimatedGas] = useState("0.00");
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate("/home")
    }
    const { id } = useParams();

    const { nativeBalances, stableBalances } = useWalletBalances(address ?? "");

    const allNetworks = getAllNetworkData(nativeBalances, stableBalances, address ?? "");

    const coin = allNetworks.find((item) => item.id === Number(id));
    const tokens = ["ETH", "USDT", "USDC"];

    const estimateGasFee = useCallback(async () => {
        // This is a mocked estimation. 
        // In production, you’ll fetch real-time gas fees from provider or API.
        if (selectedToken === "ETH") {
            setEstimatedGas("0.002");
        } else {
            setEstimatedGas("0.005");  // Token transfers cost a bit more gas
        }
    }, [selectedToken]);

    useEffect(() => {
        if (recipient && amount) {
            estimateGasFee();
        }
    }, [recipient, amount, estimateGasFee]);

    const handleSend = async () => {
        setError("");

        if (!ethers.isAddress(recipient)) {
            setError("Invalid Ethereum address.");
            return;
        }

        if (isNaN(Number(amount)) || Number(amount) <= 0) {
            setError("Enter a valid amount.");
            return;
        }

        // For now, we'll just simulate a send action
        alert(`Sending ${amount} ${selectedToken} to ${recipient}. Gas Fee: ${estimatedGas} ETH`);

        // In production, trigger a real transaction here using ethers.js or web3
    };

    if (!coin) return <div>Coin not found</div>;
    return (
        <DashboardLayout>
            <Header />
            <div className="border-t-2 border-white"></div>
            <div className="flex items-center">
                <IoIosArrowBack size={22} color="white" onClick={handleRedirect} />
                <Typography value={"Heading"} className="flex-1 translate-x-20" size={24}>
                    Send {coin.network}
                </Typography>

            </div>

            <div className="flex flex-col justify-center items-center gap-1.5">
                <Imagesize src={coin.coinImg} width={50} />
                <Typography value={"content"} size={18}>
                    {coin.balance} {coin.network}
                </Typography>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Input className="w-64" value={recipient}
                    onChange={(e) => setRecipient(e.target.value)} placeholder="Recipient Address" name={"address"} buttonText="max" />
                <Input className="w-64"
                    onChange={(e) => setAmount(e.target.value)}

                    value={amount} placeholder="Amount" name={"amount"} />
                <div className="text-sm text-gray-500">
                    Estimated Gas Fee: <span className="font-semibold text-white">{estimatedGas} ETH</span>
                </div>
                <select
                    value={selectedToken}
                    onChange={(e) => setSelectedToken(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                >
                    {tokens.map((token) => (
                        <option key={token} value={token}>
                            {token}
                        </option>
                    ))}
                </select>
                {error && <div className="text-red-500 text-sm">{error}</div>}
                <div className="mt-10">
                    <Button variant={"filled"} width={180

                    } value={"Continue"} onClick={handleSend} />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Send
