/* eslint-disable @typescript-eslint/no-explicit-any */
import Typography from "../atoms/Typography"
import type { IconType } from "react-icons/lib"

type IRoundedButton = {
    icon: IconType
    name: string
    onClick?: () => void;
}

 

const RoundedButton = ({icon:Icon,name, onClick}:IRoundedButton) => {
  return (
    <div onClick={onClick} className="flex flex-col justify-center items-center gap-1.5">
       <div
        className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-gradient-to-br from-dark via-gray-700 to-gray-400  shadow-white shadow-sm">
          <div className="w-[24px] h-[24px] rounded-full bg-secondary flex justify-center items-center">
            <Icon size={25} color="white"/>
          </div>
          
       </div>
        <Typography value={"content"} size={18}>
            {name}
        </Typography>
    </div>
  )
}

export default RoundedButton
