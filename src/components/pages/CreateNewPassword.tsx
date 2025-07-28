import Typography from "../atoms/Typography"
import AuthLayout from "../layout/AuthLayout"
import NewPassword from "../organisms/NewPassword"

const CreateNewPassword = () => {
  return (
   <AuthLayout>
      <div className="relative flex flex-col gap-4">
         <Typography value={"content"} size={"sm"}>
             Secure Your Wallet
         </Typography>
         <Typography value={"content"} className="text-center" size={28}>
             We can't recover this password. Make 
                sure it's strong and memorable.
         </Typography>
        <NewPassword/>

      </div>
   </AuthLayout>
  )
}

export default CreateNewPassword
