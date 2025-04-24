import React, { useEffect } from "react";
import AOS from "aos";
import spotlightImage from "../../images/Dunyola.jpeg"; // Correct import
import "aos/dist/aos.css";
import "./style.css";

export default function Spotlight() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="w-full relative bg-[#fffbf6] min-h-full py-10 px-4 md:px-20 flex flex-col">
      {/* Spotlight Image Container */}
      <div className="relative mx-auto max-w-[395px] h-[auto] md:h-[520px] flex flex-1">
        <div className="absolute w-[285px] lg:w-[330px] h-[500px] top-5 left-5 border-[10px] border-solid border-[#d97213]" />
        <div
          className="relative w-[90%] h-[500px] bg-[#fbf2e9] img-card"
          data-aos="flip-right"
          style={{
            backgroundImage: `url(${spotlightImage})`, // Correct import used here
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a href="https://www.instagram.com/codestarlion/" target="_blank">
            <img
              className="absolute w-8 h-8 top-2 left-2"
              alt="Mdi instagram"
              src="https://c.animaapp.com/WzNSGM6X/img/mdi-instagram-6.svg"
            />
          </a>
          <a href="https://x.com/Dunyola?t=ujvUtnE0rO3ViJT3jdnt7g&s=09" target="_blank">
            <img
              className="absolute w-8 h-8 top-[54px] left-2"
              alt="Mdi twitter"
              src="https://c.animaapp.com/WzNSGM6X/img/mdi-twitter.svg"
            />
          </a>
          <a href="https://www.linkedin.com/in/samuel-aribigbola-ab6a01214/" target="_blank">
            <img
              className="absolute w-8 h-8 top-[108px] left-2"
              alt="Cib linkedin"
              src="https://c.animaapp.com/WzNSGM6X/img/cib-linkedin.svg"
            />
          </a>
        </div>
      </div>

      <div className="about-card flex-1">
        {/* Title Section */}
        <div className="text-center mt-10 md:mt-0 xl:absolute top-[107px] left-[596px] w-full xl:w-auto">
          <div className="text-[#d97213] text-xl font-semibold [font-family:'Neue_Haas_Grotesk_Text_Pro-65Medium',Helvetica] text-3xl text-left tracking-[0] leading-[normal]">
            STUDENT
          </div>
          <div className="mt-1 text-4xl md:text-5xl font-medium text-black [font-family:'Neue_Haas_Grotesk_Text_Pro-65Medium',Helvetica] text-5xl text-left tracking-[0] leading-[normal]">
            Spotlight of the Week <br />
            {/* Decorative Vector */}
            <img
              className="xl:mb-20 w-[120px] h-2 mx-auto"
              alt="Vector"
              src="https://c.animaapp.com/WzNSGM6X/img/vector-14-1.svg"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-10 md:mt-[180px] xl:absolute md:top-[200px] xl:left-[596px] w-full xl:w-[600px] space-y-6">
          <p className="text-xl text-black [font-family:'Open_Sans',Helvetica]">
            <span className="font-semibold">Name:</span> Samuel Aribigbola (Dunyola)
          </p>
          <p className="text-xl text-black leading-5">
            <span className="font-semibold">Year of study:</span> Penultimate (Yr 3), Economics
          </p>
          <p className="text-xl text-black leading-5">
            <span className="font-semibold">Bio:</span> Samuel is a third-year Economics student at UNILAG, with a passion for Programming. He has consistently excelled in his work outside of school activities, setting a high standard for his peers.
          </p>
          <p className="text-xl text-black leading-5">
            <span className="font-semibold">Goals and Aspirations:</span> Samuel aspires to work in the Economic/Financial sector and to make a lasting impact on Nigeria’s fiscal policies through tech.
          </p>
          <p className="text-xl text-black leading-5">
            <span className="font-semibold">Interests:</span> Programming, Basketball, Anime, Video Games
          </p>
          <p className="text-xl text-black leading-5">
            <span className="font-semibold">Favourite quote:</span> “I want to be able to see myself as a child again and tell that little wisher all his wishes came true.”
          </p>
        </div>

        
      </div>
    </div>
  );
}
