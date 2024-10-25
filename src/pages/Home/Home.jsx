import React from "react";
import "./style.css";
import Hero from "./Hero";
import OurMVO from "./OurMVO";
import OurExe from "./OurExe";
import OurStats from "./OurStats";
import Spotlight from "./Spotlight";
import Gallery from "./Gallery";
import Events from "./Events";
import Sponsor from "./Sponsor";
import Highlights from "./Highlights";





export const Home = () => {
  return (
    <div className="home flex flex-row justify-center w-full">
      <div className="bg-[#fffbf6] w-full relative">

        <div>
        <Hero />
        </div>

      <div>
        <OurMVO />
        </div>

      <div>
      <OurExe />
      </div>



        <div>
        <OurStats />
        </div>



        <div>
        <Spotlight />
        </div>




        <div>
        <Gallery />
        </div>

        <div>
          <Events />
        </div>

       
        
       
        <div>
          <Sponsor />
        </div>


        <div>
          <Highlights />
        </div>




        

        
        
        
        



        

        
      </div>
    </div>
  );
};
