import { NavLink, useNavigate } from "react-router"
import { ZeonIcon } from "../../assets"
import Imagesize from "../atoms/Imagesize"
import Typography from "../atoms/Typography"
import AppLayout from "../layout"
import Button from "../molecules/Button"
import { generateMnemonic } from "bip39"
import { getWalletFromMnemonic } from "../utils/Wallet"
import { encryptData } from "../utils/encryption"
import { useWallet, type MnemonicWord } from "../context/WalletProvider"

const CreateWallet = () => {
      const { setMnemonic, setAddress, setEncryptedPrivateKey } = useWallet();
      const navigate = useNavigate()
         const handleCreateWallet = () => {
        const mnemonic = generateMnemonic();
        const wallet = getWalletFromMnemonic(mnemonic);
        const password = "user-password";  // Get this from user input in actual app
        const encryptedKey = encryptData(wallet.privateKey, password);

        setMnemonic(mnemonic.split(" ") as unknown as MnemonicWord[]);
        setAddress(wallet.address);
        setEncryptedPrivateKey(encryptedKey);

        // Save to localStorage (optional)
        localStorage.setItem("encryptedPrivateKey", encryptedKey);
        navigate('/mnemonic')
    };
  return (
   <AppLayout>
      <div className="z-50 relative h-screen flex flex-col justify-center items-center gap-4">
        <Imagesize width={200} value={"base"} src={ZeonIcon} />
        <Typography value={"content"} size={40}>
            To Get Started
        </Typography>

        <Button variant={"filled"} width={200} value={"Create Wallet"} onClick={handleCreateWallet}  />
        <NavLink to={""} className={`font-bold text-purple text-24`}>
           Import Wallet
        </NavLink>
      </div>

   </AppLayout>
  )
}

export default CreateWallet
