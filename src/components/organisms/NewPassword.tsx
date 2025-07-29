import Input from "../atoms/Input"
import Button from "../molecules/Button"

const NewPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-10">
        <Input placeholder="New Password" className="w-80" name="newPassword"/>
        <Input placeholder="Confirm Password" className="w-80" name="cPassword"/>

        <div className="mt-20">
            <Button variant={"filled"} width={200} value={"Continue"} to="/home"/>
        </div>
    </div>
  )
}

export default NewPassword
