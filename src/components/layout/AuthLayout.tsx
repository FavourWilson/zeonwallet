import Goldblur from "../atoms/Goldblur"
import PurpleBlur from "../atoms/PurpleBlur"

type IAuthLayout = {
    children: React.ReactNode
}
const AuthLayout = ({children}:IAuthLayout) => {
  return (
    <div className="relative bg-dark">
        <div className="z-10 absolute top-0 left-64"><PurpleBlur /></div>
        <div className="z-10 absolute bottom-0 right-64"><Goldblur /></div>

        {children}
    </div>
  )
}

export default AuthLayout
