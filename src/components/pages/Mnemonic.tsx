import Typography from "../atoms/Typography"
import AppLayout from "../layout"
import Button from "../molecules/Button"
import RecoveryPhase from "../organisms/RecoveryPhase"


const Mnemonic = () => {
  return (
    <AppLayout>
        <div className="relative flex flex-col justify-center items-center gap-3 mt-24 z-40">
            <Typography value={"content"} size={'lg'}>
                 🔐 Your Recovery Phrase
            </Typography>
            <Typography value={"content"} className="font-bold" size={'lg'}>
                 💡 Write it down. Never share it.
            </Typography>
            <div className="blur-md hover:blur-none">
                <RecoveryPhase/>
            </div>
            
            <div className="mt-20">
                <Button variant={"filled"} width={28} value={"Continue"} to="/new-password"/>
            </div>
            
        </div>
    </AppLayout>
  )
}

export default Mnemonic
