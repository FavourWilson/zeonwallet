import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/24QBIHpF5afeBNhtK14E0ziALi4");
const RPC_URLS = {
    ethereum: "https://mainnet.infura.io/v3/24QBIHpF5afeBNhtK14E0ziALi4",
    base: "https://base-mainnet.infura.io/v3/24QBIHpF5afeBNhtK14E0ziALi4",
    arbitrum: "https://arbitrum-mainnet.infura.io/v3/24QBIHpF5afeBNhtK14E0ziALi4"
};
const erc20Abi = [
    {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        type: "function",
    },
];

const usdtContract = new ethers.Contract("0xdAC17F958D2ee523a2206206994597C13D831ec7", erc20Abi, provider);
const usdcContract = new ethers.Contract("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606EB48", erc20Abi, provider);

export const getStableBalance = async (walletAddress: string) => {
    const [usdtBalance, usdcBalance] = await Promise.all([
        usdtContract.balanceOf(walletAddress),
        usdcContract.balanceOf(walletAddress),
    ]);

    return {
        usdt: ethers.formatUnits(usdtBalance, 6),  // USDT/USDC are 6 decimals
        usdc: ethers.formatUnits(usdcBalance, 6),
    };
};



export const getNativeBalance = async (walletAddress: string) => {
    try {
        const ethereumProvider = new ethers.JsonRpcProvider(RPC_URLS.ethereum);
        const baseProvider = new ethers.JsonRpcProvider(RPC_URLS.base);
        const arbitrumProvider = new ethers.JsonRpcProvider(RPC_URLS.arbitrum);

        const [ethBalance, baseBalance, arbBalance] = await Promise.all([
            ethereumProvider.getBalance(walletAddress),
            baseProvider.getBalance(walletAddress),
            arbitrumProvider.getBalance(walletAddress)
        ]);

        return {
            ethereum: ethers.formatEther(ethBalance),
            base: ethers.formatEther(baseBalance),
            arbitrum: ethers.formatEther(arbBalance)
        };
    } catch (error) {
        console.error("Error fetching native balances:", error);
        return {
            ethereum: "0",
            base: "0",
            arbitrum: "0"
        };
    }
};
