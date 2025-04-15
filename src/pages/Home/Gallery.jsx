import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./style.css";

export default function Gallery() {
  return (
    <div className="relative h-full w-full my-14 bg-white">
      {/* Parallax Background Section */}
      <div className="relative parallax-bg h-[724px]">
        <div className="flex flex-col items-center gap-6 justify-center min-h-screen">
          <div className="flex flex-col items-center justify-center gap-6 w-[95%]">
            <div className="relative self-stretch mt-[2rem] [font-family:'Neue_Haas_Grotesk_Text_Pro-75Bold',Helvetica] font-bold text-white text-[40px] xl:text-[96px] text-center tracking-[0] leading-none">
              NESAITES IN VIEW
            </div>
            <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-white text-center tracking-[0] leading-8">
              Embark on a visual journey that transcends words. Our photo gallery captures moments in frozen time that
              define our academic journey.
            </p>
          </div>
          <Link to="/gallery">
          <div className="inline-flex items-center justify-center gap-2.5 px-[50px] py-[15px] bg-[#d97213] rounded-[1000px]">
            <div className="mt-[-1.00px] font-bold text-white text-2xl leading-8 whitespace-nowrap [font-family:'Open_Sans',Helvetica] text-center tracking-[0]">
            
                    Gallery
               
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
