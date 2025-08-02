import { useState } from "react"
import Imagesize from "../atoms/Imagesize"
import Typography from "../atoms/Typography"
import DashboardLayout from "../layout/DashboardLayout"
import Header from "../molecules/Header"
import NetworkDropdown from "../molecules/NetworkDropdown"
import { useLocation, useNavigate } from "react-router"
import { useWalletBalances } from "../utils/useWalletBalances"
import { getAllNetworkData } from "../utils"
import { useWallet } from "../context/WalletProvider"


type NetworkData = {
    id: number;
    coinImg: string;
    network: string;
    type: string;
    balance: string | number;
};
const AllNetworks = () => {
    const { address } = useWallet();
    const { nativeBalances, stableBalances } = useWalletBalances(address ?? "");


const allNetworks: NetworkData[] = getAllNetworkData(nativeBalances, stableBalances, address ?? "");

    const { state } = useLocation();
    const action = state?.action; // 'receive' or 'send'
    const [selectedNetwork, setSelectedNetwork] = useState("All Network");
    const navigate = useNavigate()

    const handleSelect = (id: number) => {
        if (action === 'receive') {
            navigate(`/receive/${id}`);
        } else if (action === 'send') {
            navigate(`/send/${id}`);
        } else {
            console.error("No action provided!");
        }
    };

    const filteredData = allNetworks.filter((data: NetworkData) => {
        if (selectedNetwork === "All Network") return true;
        return data.type === selectedNetwork;
    });

    return (
        <DashboardLayout>
            <Header />
            <NetworkDropdown selected={selectedNetwork} onSelect={setSelectedNetwork} />
            <div className="flex flex-col gap-2">
                {

                    filteredData.map((data) => (
                        <div
                            key={data.id}
                            onClick={() => handleSelect(data.id)}
                            className={`flex items-center justify-between rounded-xl shadow p-4 cursor-pointer transition-all duration-300 ${selectedNetwork ? "bg-purple" : "bg-secondary"
                                }`}
                        >
                            <div className="flex gap-1.5 items-center">
                                <Imagesize src={data.coinImg} width={18} />
                                <Typography value={"content"} size={16}>
                                    {data.network}
                                </Typography>
                            </div>

                            <div className="flex items-center gap-2">
                                <Typography value={"content"} size={16}>
                                    {data.balance}
                                </Typography>

                            </div>
                        </div>
                    ))
                }



            </div>
        </DashboardLayout>
    )
}

export default AllNetworks
