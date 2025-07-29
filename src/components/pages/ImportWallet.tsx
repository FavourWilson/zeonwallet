import Input from "../atoms/Input"
import Typography from "../atoms/Typography"
import AuthLayout from "../layout/AuthLayout"
import Button from "../molecules/Button"

const ImportWallet = () => {
  return (
    <AuthLayout>
        <div className="flex flex-col justify-center items-center ggap-4">
            <Typography value={"content"} size={24} className="font-bold mt-20">
                ✍️ Enter your 12-word Recovery Phrase 
            </Typography>
            <Input name="" className="px-3"  as="textarea" placeholder="Paste from Clipboard" rows={20}/>
            <Button variant={"filled"} width={64} value={"Continue"} />
        </div>
    </AuthLayout>
  )
}

export default ImportWallet
   