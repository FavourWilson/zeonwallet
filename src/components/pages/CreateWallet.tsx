import { ZeonIcon } from "../../assets"
import Imagesize from "../atoms/Imagesize"
import Typography from "../atoms/Typography"
import AppLayout from "../layout"
import Button from "../molecules/Button"

const CreateWallet = () => {
  return (
   <AppLayout>
      <div className="z-50 relative h-screen flex flex-col justify-center items-center gap-4">
        <Imagesize width={250} value={"base"} src={ZeonIcon} />
        <Typography value={"content"} size={40}>
            To Get Started
        </Typography>

        <Button variant={"filled"} width={200} value={"Create Wallet"} to="/mnemonic"  />
        <Button variant={"bordered"} width={200} value={"Import Wallet"} to="" />
      </div>

   </AppLayout>
  )
}

export default CreateWallet
