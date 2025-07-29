import { NavLink } from "react-router"
import { ZeonIcon } from "../../assets"
import Imagesize from "../atoms/Imagesize"
import Typography from "../atoms/Typography"
import AppLayout from "../layout"
import Button from "../molecules/Button"

const CreateWallet = () => {
  return (
   <AppLayout>
      <div className="z-50 relative h-screen flex flex-col justify-center items-center gap-4">
        <Imagesize width={200} value={"base"} src={ZeonIcon} />
        <Typography value={"content"} size={40}>
            To Get Started
        </Typography>

        <Button variant={"filled"} width={200} value={"Create Wallet"} to="/mnemonic"  />
        <NavLink to={""} className={`font-bold text-purple text-24`}>
           Import Wallet
        </NavLink>
      </div>

   </AppLayout>
  )
}

export default CreateWallet
