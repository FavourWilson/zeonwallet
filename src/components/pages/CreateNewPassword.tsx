import Typography from "../atoms/Typography"
import AuthLayout from "../layout/AuthLayout"
import NewPassword from "../organisms/NewPassword"

const CreateNewPassword = () => {
  return (
   <AuthLayout>
      <div className="relative flex flex-col justify-center items-center gap-4">
         <Typography value={"content"} className="mt-48" size={24}>
             Secure Your Wallet
         </Typography>
         <Typography value={"content"} className="text-center font-bold" size={28}>
             We can't recover this password. Make 
                sure it's strong and memorable.
         </Typography>
        <NewPassword/>

      </div>
   </AuthLayout>
  )
}

export default CreateNewPassword
