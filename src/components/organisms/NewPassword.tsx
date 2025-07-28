import Input from "../atoms/Input"
import Button from "../molecules/Button"

const NewPassword = () => {
  return (
    <div className="mt-5 flex flex-col gap-3">
        <Input placeholder="New Password" name="newPassword"/>
        <Input placeholder="Confirm Password" name="cPassword"/>

        <div className="mt-20">
            <Button variant={"filled"} width={28} value={"Continue"} />
        </div>
    </div>
  )
}

export default NewPassword
