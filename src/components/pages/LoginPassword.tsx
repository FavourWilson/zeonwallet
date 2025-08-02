import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../molecules/Button";
import { decryptData } from "../utils/encryption";
import { useWallet } from "../context/WalletProvider";
import { useNavigate } from "react-router";
import { ethers } from "ethers";
import Typography from "../atoms/Typography";

const LoginPassword = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setAddress, setEncryptedPrivateKey } = useWallet();

    const handleLogin = () => {
        const encryptedPrivateKey = localStorage.getItem("encryptedPrivateKey");

        if (!encryptedPrivateKey) {
            setError("No wallet found. Please create a new wallet.");
            return;
        }

        try {
            const privateKey = decryptData(encryptedPrivateKey, password);
            const wallet = new ethers.Wallet(privateKey);

            setEncryptedPrivateKey(encryptedPrivateKey);
            setAddress(wallet.address);

            navigate("/home");
        } catch (err) {
            console.error(err);
            setError("Incorrect password. Please try again.");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
            <Typography value="Heading" size={24} className="text-white font-bold">
                Unlock Your Wallet
            </Typography>

            <Typography value="subtitle" size={14} className="text-gray-400 text-center max-w-xs">
                Enter your password to securely access your wallet.
            </Typography>
            <Input
                type="password"
                placeholder="Enter Password"
                value={password}
                className="w-80"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="mt-10">
                <Button variant={"filled"} width={200} value={"Login"} onClick={handleLogin} />
            </div>
        </div>
    );
};

export default LoginPassword;
