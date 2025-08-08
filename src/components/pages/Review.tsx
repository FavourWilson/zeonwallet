import { useLocation, useNavigate } from "react-router";
import DashboardLayout from "../layout/DashboardLayout"
import Header from "../molecules/Header"
import { IoIosArrowBack } from "react-icons/io";
import Typography from "../atoms/Typography";
import Imagesize from "../atoms/Imagesize";
import Button from "../molecules/Button";

const Review = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    if (!state) {
        navigate("/send"); // If no data, redirect back
        return null;
    }

    const { sender, recipient, amount, selectedToken, estimatedGas, coin } = state;

    const handleSend = () => {
        navigate("/success"); 
    };
    const shortenAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
  return (
    <DashboardLayout>
        <Header/>
        <div className="border-t-2 border-white"></div>
        <div className="flex items-center">
        <IoIosArrowBack size={22} color="white" onClick={() => navigate(-1)}/>
        <Typography value={"Heading"} className="flex-1 translate-x-20" size={14}>
          Review Transaction
        </Typography>
      </div>
        <div className="flex flex-col justify-center items-center gap-3">
            <div className="flex flex-col items-center gap-4 ">
                <Imagesize src={coin?.coinImg} width={24}/>
                <Typography value={"content"} size={16}>
                    {amount}
                </Typography>
            </div>
            <div className="flex justify-between items-center bg-purple opacity-30 gap-2 w-80 h-20 rounded-xl p-3">
                <Typography value={"content"} size={14}>
                    From: <span className="text-white">{shortenAddress(sender)}</span>
                </Typography>
                <IoIosArrowBack size={18} color="white" />
                <Typography value={"content"} size={14}>
                    To: <span className="text-white">{shortenAddress(recipient)}</span>
                </Typography>
            </div>
            <div className="flex justify-between items-center bg-purple opacity-30 gap-2 w-80 h-20 rounded-xl p-3">
                <Typography value={"content"} size={14}>
                    Network
                </Typography>
                <div className="flex gap-1.5">
                   <Imagesize src={coin?.coinImg} width={24}/>
                    <Typography value={"content"} size={14}>
                        {selectedToken}
                    </Typography>
                </div>
            </div>
            <div className="flex justify-between items-center w-full px-5">
                <Typography value={"content"} size={14}>
                    Network Fee
                </Typography>
                <Typography value={"content"} size={14}>
                    {estimatedGas}
                </Typography>
            </div>
            <div className="flex justify-center items-center gap-10 mt-20">
                <Button variant={"filled"} width={120} value={"Confirm"} onClick={handleSend}/>
                <Button variant={"bordered"} width={120} value={"Cancel"}/>
            </div>
        </div>
    </DashboardLayout>
  )
}

export default Review
