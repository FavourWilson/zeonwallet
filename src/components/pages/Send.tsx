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
import { useState } from "react"

const Send = () => {
     const { address } = useWallet();
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
    const [selectedToken, setSelectedToken] = useState("ETH");
    const [estimatedGas, setEstimatedGas] = useState("0.00");
    const [error, setError] = useState("");
    const navigate = useNavigate()
     const handleRedirect = () =>{
    navigate("/home")
  }
   const { id } = useParams();
    
         const { nativeBalances, stableBalances } = useWalletBalances(address ?? "");
   
     const allNetworks = getAllNetworkData(nativeBalances, stableBalances, address ?? "");
   
  const coin = allNetworks.find((item) => item.id === Number(id));

  if (!coin) return <div>Coin not found</div>;
  return (
    <DashboardLayout>
        <Header/>
        <div className="border-t-2 border-white"></div>
        <div className="flex items-center">
        <IoIosArrowBack size={22} color="white" onClick={handleRedirect}/>
        <Typography value={"Heading"} className="flex-1 translate-x-20" size={24}>
          Send {coin.network}
        </Typography>
        
      </div>

      <div className="flex flex-col justify-center items-center gap-1.5">
            <Imagesize src={coin.coinImg} width={50}/>
            <Typography value={"content"}  size={18}>
           {coin.balance} {coin.network}
        </Typography>
        </div>
        <div className="flex flex-col items-center gap-3">
            <Input className="w-64" placeholder="Recipient Address" name={"address"} buttonText="max" />
            <Input className="w-64" placeholder="Amount" name={"amount"} />

            <div className="mt-10">
                <Button variant={"filled"} width={180

                } value={"Continue"} />
            </div>
        </div>
    </DashboardLayout>
  )
}

export default Send
