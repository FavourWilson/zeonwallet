import Goldblur from "../atoms/Goldblur"
import PurpleBlur from "../atoms/PurpleBlur"
import { useIsDesktop } from "../utils/NotDesktop"

type IAuthLayout = {
    children: React.ReactNode
}
const AuthLayout = ({children}:IAuthLayout) => {
   const isDesktop = useIsDesktop();

  if (isDesktop) return null;

  
  return (
    <div className="relative bg-dark h-screen overflow-hidden">
        <div className="z-10 absolute top-0 left-64"><PurpleBlur /></div>
        <div className="z-10 absolute bottom-0 right-64"><Goldblur /></div>
        
        {children}
    </div>
  )
}

export default AuthLayout
