/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router"
import Typography from "../atoms/Typography"
import type { IconType } from "react-icons/lib"

type IRoundedButton = {
    icon: IconType
    name: string
    to: string
}

 

const RoundedButton = ({icon:Icon,name, to}:IRoundedButton) => {
  return (
    <NavLink to={to} className="flex flex-col justify-center items-center gap-1.5">
       <div
        className="w-24 h-24 rounded-full flex justify-center items-center bg-gradient-to-br from-dark via-gray-700 to-gray-400  shadow-white shadow-sm">
          <div className="w-20 h-20 rounded-full bg-secondary flex justify-center items-center">
            <Icon size={40} color="white"/>
          </div>
          
       </div>
        <Typography value={"content"} size={24}>
            {name}
        </Typography>
    </NavLink>
  )
}

export default RoundedButton
