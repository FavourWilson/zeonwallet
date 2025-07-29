import Goldblur from "../atoms/Goldblur";
import PurpleBlur from "../atoms/PurpleBlur";
import { useIsDesktop } from "../utils/NotDesktop";


type ILayout = {
    children: React.ReactNode;
}
const AppLayout = ({children}:ILayout) => {
    const isDesktop = useIsDesktop();

  if (isDesktop) return null;

  return (
     <div className="relative h-screen bg-dark py-5 overflow-hidden">
      {/* Blurs */}
      <div className="z-10 absolute bottom-10 right-0"><Goldblur /></div>
      <div className="z-10 absolute top-10 left-0"><PurpleBlur /></div>

      
      {/* Main Slide Container */}
       {children}
    </div>
  )
}

export default AppLayout
