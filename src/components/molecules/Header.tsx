import { SettingsIcon, ZeonIcon } from "../../assets"
import Imagesize from "../atoms/Imagesize"

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 mt-5">
       <Imagesize width={65} height={65} value={"base"} src={ZeonIcon} />
       <Imagesize width={65} height={65} value={"base"} src={SettingsIcon} />
    </div>
  )
}

export default Header
