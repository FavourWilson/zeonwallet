import { useEffect, useState } from 'react';
import { getStableBalance, getNativeBalance } from '../utils/getTokenBalances';

export const useWalletBalances = (walletAddress: string) => {
    const [nativeBalances, setNativeBalances] = useState({
        ethereum: "0",
        base: "0",
        arbitrum: "0"
    });
    const [stableBalances, setStableBalances] = useState({
        usdt: "0",
        usdc: "0"
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBalances = async () => {
            if (!walletAddress) return;
            setLoading(true);
            const native = await getNativeBalance(walletAddress);
            const stable = await getStableBalance(walletAddress);
            setNativeBalances(native);
            setStableBalances(stable);
            setLoading(false);
        };

        fetchBalances();
    }, [walletAddress]);

    return { nativeBalances, stableBalances, loading };
};
