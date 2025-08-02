import { useNavigate } from "react-router"
import { SettingsIcon, ZeonIcon } from "../../assets"
import Imagesize from "../atoms/Imagesize"

const Header = () => {
  const navigate = useNavigate()
  const handleRedirectToHome = () =>{
    navigate("/home")
  }
  return (
    <div className="flex justify-between items-center px-4 mt-5">
       <Imagesize width={65} height={65} value={"base"} src={ZeonIcon} onclick={handleRedirectToHome}/>
       <Imagesize width={65} height={65} value={"base"} src={SettingsIcon} />
    </div>
  )
}

export default Header
