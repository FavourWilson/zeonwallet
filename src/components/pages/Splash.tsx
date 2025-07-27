import { useEffect, useState } from "react";
import AppLayout from "../layout";
import WalkthroughCard from "../organisms/WalkthroughCard";
import { Slides } from "../utils";
import SlideIndicator from "../atoms/SlideIndicator";
import { NavLink } from "react-router";


const Splash = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % Slides.length);
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);
  return (
   <AppLayout>
    <div className="relative z-40 flex justify-end items-end px-5">
        <NavLink className="bg-transparent focus:outline-none active:bg-transparent text-white" to={'/create-wallet'}>Skip</NavLink>
      </div>
       <div className="relative z-40  h-screen text-white flex flex-col justify-center items-center gap-6 overflow-hidden">
        
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}

        >
          {Slides.map((slide, i) => (
             <div key={i} className="min-w-full flex justify-center">
              <WalkthroughCard {...slide} />
            </div>
          ))}
        </div>

        <SlideIndicator total={Slides.length} currentIndex={currentIndex} />
      </div>
   </AppLayout>
  );
};

export default Splash;
