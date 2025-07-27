import Goldblur from "../atoms/Goldblur";
import PurpleBlur from "../atoms/PurpleBlur";


type ILayout = {
    children: React.ReactNode;
}
const AppLayout = ({children}:ILayout) => {
   
  return (
     <div className="relative h-screen bg-dark py-5">
      {/* Blurs */}
      <div className="z-10 absolute bottom-0 right-64"><Goldblur /></div>
      <div className="z-10 absolute bottom-10 right-0"><Goldblur /></div>
      <div className="z-10 absolute bottom-20 right-48"><Goldblur /></div>
      <div className="z-10 absolute top-0 left-64"><PurpleBlur /></div>
      <div className="z-10 absolute top-10 left-0"><PurpleBlur /></div>
      <div className="z-10 absolute top-20 left-48"><PurpleBlur /></div>

      
      {/* Main Slide Container */}
       {children}
    </div>
  )
}

export default AppLayout
