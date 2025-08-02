import { useState } from "react"
import Input from "../atoms/Input"
import Typography from "../atoms/Typography"
import { useWallet } from "../context/WalletProvider"
import AuthLayout from "../layout/AuthLayout"
import Button from "../molecules/Button"
import { useNavigate } from "react-router"

const ImportWallet = () => {
   const { setMnemonic } = useWallet();
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        const words = inputValue.trim().split(/\s+/);
        if (words.length !== 12) {
            setError("Mnemonic must be exactly 12 words.");
            return;
        }

        // Transform into [{id, name}]
        const mnemonicArray = words.map((word, index) => ({
            id: index + 1,
            name: word
        }));

        setMnemonic(mnemonicArray);
        navigate('/home');  // Adjust to your home route
    };

  return (
    <AuthLayout>
        <div className="flex flex-col justify-center items-center ggap-4">
            <Typography value={"content"} size={24} className="font-bold mt-20">
                Paste Your Recovery Phrase
            </Typography>
            <Input name="" className="px-3"  as="textarea" placeholder="Enter your 12-word recovery phrase" value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                    setError("");  // Clear error on typing
                }} rows={20}/>
                {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button onClick={handleSubmit} variant={"filled"} width={64} value={"Continue"} />
        </div>
    </AuthLayout>
  )
}

export default ImportWallet
   