import { MdOutlineToggleOff } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import Typography from '../atoms/Typography';
import { NavLink } from 'react-router';
import IconWrapper from '../atoms/IconWrapper';

import Imagesize from '../atoms/Imagesize';
import { useState } from "react";

type TabType = "native" | "stable";


type WalletBalanceItem = {
    id: string | number;
    network: string;
    logo: string;
    balance: number;
};

type ListWalletBalanceProps = {
    nativeData: WalletBalanceItem[];
    stableData: WalletBalanceItem[];
};

const ListWalletBalance = ({nativeData, stableData}: ListWalletBalanceProps) => {
    
    const [activeTab, setActiveTab] = useState<TabType>("native");
    const [open, setOpen] = useState(false);
    
    const tabs = {
        native: nativeData,
        stable: stableData,
    };

    const TabMenu =[
        {
            name:"Manage Tokens",
            img: MdOutlineToggleOff
        },
        {
            name:"Hidden Balance",
            img: AiFillEyeInvisible
        },
    ]

   
    return (
        <div className="p-4 relative">
            {/* Navigation */}
            <div className='flex justify-between items-center gap-2'>
                <div className="flex justify-around mb-4">
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
                <div onClick={()=>setOpen(!open)} className='flex gap-1'>
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
                            <Imagesize src={item?.logo} alt={item.network} width={20} />
                            <div>
                                <Typography className="text-white" value={'Heading'} size={16}>
                                    {item.network}
                                </Typography>
                                <Typography className="text-white" value={'content'} size={16}>
                                    {item.balance.toLocaleString()} {activeTab === "native" ? "coins" : ""}
                                </Typography>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-white">${item.balance}</p>
                        </div>
                    </div>
                ))}
            </div>
            
           {
            open &&  <div className='space-y-3'>
                <div className='w-40 h-20 flex flex-col gap-3 bg-secondary absolute top-20 left-44 py-2 rounded-lg'>
                    {
                        TabMenu.map((data)=>(
                          <div className='flex justify-between items-center px-2 gap-3'>
                             <Typography value={'Heading'} size={12} >
                                 <NavLink to="">{data.name}</NavLink>
                             </Typography>
                              <IconWrapper icon={data.img} size={18} color='white'/>
                          </div>  
                        ))
                    }
                </div>
            </div>
           }
        </div>

    )
}

export default ListWalletBalance
