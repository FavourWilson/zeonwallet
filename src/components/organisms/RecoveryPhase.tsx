import MnemonicCard from '../molecules/MnemonicCard'
import { generateMnemonic } from 'bip39';
import { useEffect, useState } from 'react';
import { useWallet } from '../context/WalletProvider';

const RecoveryPhase = () => {
   const { mnemonic, setMnemonic } = useWallet();
      const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!mnemonic || mnemonic.length === 0) {
            const phrase = generateMnemonic();
             const mnemonicArray = phrase.split(" ").map((word, index) => ({
                id: index + 1,
                name: word
            }));
            setMnemonic(mnemonicArray);
        }
    }, [mnemonic, setMnemonic]);

    useEffect(() => {
        if (mnemonic && mnemonic.length > 0) {
            setLoading(false); // Only render cards when mnemonic is populated
        }
    }, [mnemonic]);

    if (loading) {
        return <div className="text-white text-center mt-10">Loading mnemonic...</div>;
    }
    console.log(mnemonic);
 const handleCopy = () => {
        const phraseString = mnemonic.map(item => item.name).join(" ");
        navigator.clipboard.writeText(phraseString);
        alert("Mnemonic copied to clipboard!");
    };

    const handleDownload = () => {
        const phraseString = mnemonic.map(item => item.name).join(" ");
        const element = document.createElement("a");
        const file = new Blob([phraseString], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "mnemonic.txt";
        document.body.appendChild(element); // Required for Firefox
        element.click();
    };
  
  return (
     <div className="flex flex-col items-center gap-6">
            <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto z-50">
                {mnemonic.map((data, index) => (
                    <MnemonicCard key={data.id || index} id={data.id} name={data.name} />
                    
                ))}
            </div>

            <div className="flex gap-4 mt-6">
                <button
                    onClick={handleCopy}
                    className="border-b-2 border-purple-600 text-white py-2 px-4 rounded-lg shadow"
                >
                    Copy Mnemonic
                </button>
                <button
                    onClick={handleDownload}
                    className="border-2 border-green-600 text-white py-2 px-4 rounded-lg shadow"
                >
                    Download as .txt
                </button>
            </div>
        </div>
  )
}

export default RecoveryPhase
