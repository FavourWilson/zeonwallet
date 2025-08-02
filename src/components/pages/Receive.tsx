import { useNavigate, useParams } from "react-router";
import Typography from "../atoms/Typography";
import DashboardLayout from "../layout/DashboardLayout"
import Header from "../molecules/Header"
import { IoIosArrowBack } from "react-icons/io";
import { QRCodeCanvas } from "qrcode.react";
import { TbCopy } from "react-icons/tb";
import { useState } from "react";
import { getAllNetworkData } from "../utils";
import { useWalletBalances } from "../utils/useWalletBalances";
import { useWallet } from "../context/WalletProvider";


const Receive = () => {
  const { id } = useParams();
  const { address } = useWallet();
      const { nativeBalances, stableBalances } = useWalletBalances(address ?? "");
  
  const allNetworks = getAllNetworkData(nativeBalances, stableBalances, address ?? "");

  const coin = allNetworks.find((item) => item.id === Number(id));
  console.log(address)
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate()
   const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address ?? "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 secs
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  const handleRedirect = () =>{
    navigate("/home")
  }
  if (!coin) return <div>Coin not found</div>;
  return (
    <DashboardLayout>
      <Header />
      <div className="border-t-2 border-white"></div>
      <div className="flex items-center">
        <IoIosArrowBack size={22} color="white" onClick={handleRedirect}/>
        <Typography value={"Heading"} className="flex-1 translate-x-20" size={14}>
          Receive Address
        </Typography>
      </div>
      <div className="flex flex-col items-center gap-3">
        <QRCodeCanvas
          imageSettings={{
            src: coin.coinImg,
            x: undefined,
            y: undefined,
            height: 40,
            width: 40,
            excavate: true
          }}
          value={coin.walletAddress}
          size={200}
        />
        <div className="w-64 h-20 p-3 border-2 border-purple rounded-tl-xl rounded-tr-xl">
          <Typography value={"content"} className="break-all text-center font-bold" size={14}>
            {coin.network}
          </Typography>
          <Typography value={"content"} className="break-all text-center font-bold" size={14}>
            {coin.walletAddress}
          </Typography>
        </div>
        <div  onClick={handleCopy} className="w-64 h-10 flex justify-center items-center gap-1.5 border-2 border-purple rounded-bl-xl rounded-br-xl p-2">
          <Typography value={"content"} className="break-all text-center font-bold" size={14}>
            {copied ? 'Copied!' : 'Copy'}

          </Typography>
          <TbCopy size={16} color="white" onClick={handleCopy}/>

        </div>
      </div>
    </DashboardLayout>
  )
}

export default Receive
