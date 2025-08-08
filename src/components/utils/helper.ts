/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from "ethers";

export const getTokenAddress = (symbol: string) => {
    const addresses: Record<string, string> = {
        USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606EB48"
    };
    return addresses[symbol] || ethers.ZeroAddress;
};

export const UNISWAP_ROUTER_ADDRESS = "0xE592427A0AEce92De3Edee1F18E0157C05861564";

export const performSwap = async (signer: any, tokenIn: string, tokenOut: string, amount: string, to: string) => {
    const routerContract = new ethers.Contract(
        UNISWAP_ROUTER_ADDRESS,
        ["function exactInputSingle((address,address,uint24,address,uint256,uint256,uint160)) external payable returns (uint256 amountOut)"],
        signer
    );

    const params = {
        tokenIn: getTokenAddress(tokenIn),
        tokenOut: getTokenAddress(tokenOut),
        fee: 500,  // 0.05% pool fee tier for USDT/USDC on Uniswap V3
        recipient: to,
        deadline: Math.floor(Date.now() / 1000) + 60 * 10,
        amountIn: ethers.parseUnits(amount, 6),
        amountOutMinimum: 0,
        sqrtPriceLimitX96: 0,
    };

    return routerContract.exactInputSingle(params, { value: tokenIn === "ETH" ? ethers.parseEther(amount) : 0n });
};
