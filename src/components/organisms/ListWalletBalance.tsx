import { useState } from 'react'
import { NativeWalletData, StableWalletData } from '../utils';
type TabType = "native" | "stable";

const ListWalletBalance = () => {
    const [activeTab, setActiveTab] = useState<TabType>("native");

    const tabs = {
        native: NativeWalletData,
        stable: StableWalletData,
    };
    return (
        <div className="p-4">
            {/* Navigation */}
            <div className='flex justify-between items-center gap-2'>
                <div className="flex justify-around mb-4 border-b border-gray-300">
                    {(["native", "stable"] as TabType[]).map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-4 w-full font-semibold capitalize ${activeTab === tab ? "border-b-4 border-purple-600 text-purple-600" : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className='flex gap-1'>
                    <div className='w-3 h-3 rounded-full bg-white '></div>
                    <div className='w-3 h-3 rounded-full bg-white'></div>
                    <div className='w-3 h-3 rounded-full bg-white'></div>
                </div>
            </div>

            <div className="space-y-4">
                {tabs[activeTab].map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between bg-secondary rounded-xl shadow p-4"
                    >
                        <div className="flex items-center gap-3">
                            <img src={item.coinImg} alt={item.network} className="w-10 h-10 rounded-full" />
                            <div>
                                <h3 className="text-sm font-medium text-white">{item.network}</h3>
                                <p className="text-xs text-white">
                                    {item.balance.toLocaleString()} {activeTab === "native" ? "coins" : ""}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-white">${item.Equivalent}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ListWalletBalance
