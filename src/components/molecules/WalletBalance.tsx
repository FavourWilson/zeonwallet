import Typography from "../atoms/Typography"

interface WalletBalanceProps {
    totalBalance: string;
}

const WalletBalance = ({ totalBalance }: WalletBalanceProps) => {
  return (
    <div>
       <Typography value={"Heading"} className="font-bold text-center font-poppins" size={40}>
            ${totalBalance}
       </Typography>
    </div>
  )
}

export default WalletBalance
