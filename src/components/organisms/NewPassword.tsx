import { useState } from "react";
import Input from "../atoms/Input"
import Button from "../molecules/Button"
import { useNavigate } from "react-router";
import { getWalletFromMnemonic } from "../utils/Wallet";
import { encryptData } from "../utils/encryption";
import { useWallet } from "../context/WalletProvider";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const { mnemonic, setAddress, setEncryptedPrivateKey } = useWallet();

     const handleSavePassword = () => {
        if (mnemonic?.length === 0) {
            alert("Mnemonic is missing!");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (newPassword.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        const mnemonicPhrase = mnemonic.map(item => item.name).join(" ");
        const wallet = getWalletFromMnemonic(mnemonicPhrase);
        const encryptedPrivateKey = encryptData(wallet.privateKey, newPassword);

        setAddress(wallet.address);
        setEncryptedPrivateKey(encryptedPrivateKey);

        // Optional: Persist to localStorage
        localStorage.setItem("encryptedPrivateKey", encryptedPrivateKey);

        navigate("/home");
    };
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-10">
        <Input type="password" placeholder="New Password" value={newPassword} className="w-80"  onChange={(e) => setNewPassword(e.target.value)} name="newPassword"/>
        <Input type="password" placeholder="Confirm Password" value={confirmPassword} className="w-80" onChange={(e) => setConfirmPassword(e.target.value)} name="cPassword"/>

        <div className="mt-20">
            <Button variant={"filled"} width={200} value={"Continue"} onClick={handleSavePassword} />
        </div>
    </div>
  )
}

export default NewPassword
