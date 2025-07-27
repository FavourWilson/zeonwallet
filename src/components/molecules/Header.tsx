import { SettingsIcon, ZeonIcon } from "../../assets"
import Imagesize from "../atoms/Imagesize"

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 mt-5">
       <Imagesize width={30} height={30} value={"LG"} src={ZeonIcon} />
       <Imagesize width={50} height={50} value={"XL"} src={SettingsIcon} />
    </div>
  )
}

export default Header
