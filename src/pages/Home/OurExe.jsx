import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./style.css";

export default function OurExe() {
  const [executives, setExecutives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchExecutives = async () => {
      try {
        const response = await axios.get(
          "https://faculty-backend-55jd.onrender.com/getExecutives"
        );
        console.log(response.data);
        setExecutives(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching executives:", err);
        setError("Failed to fetch executives.");
        setLoading(false);
      }
    };

    fetchExecutives();
  }, []);

  useEffect(() => {
    if (executives.length > 0) {
      const container = scrollContainerRef.current;

      const handleAnimationEnd = () => {
        // Move the first child to the end of the container
        const firstChild = container.firstElementChild;
        container.appendChild(firstChild);

        // Reset the animation to maintain seamless loop
        container.style.animation = "none";
        requestAnimationFrame(() => {
          container.style.animation = "";
        });
      };

      // Attach the animationend event
      container.addEventListener("animationend", handleAnimationEnd);

      return () => {
        container.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, [executives]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full relative bg-white h-[742px] overflow-hidden text-center text-[48px] text-black font-open-sans">
      <div className="absolute top-[88px] left-[139px] text-[24px] lg:text-[24px] xl:text-[48px] font-neue-haas-grotesk-text-pro">Our Executives</div>
        <div className="absolute top-[172px] flex flex-row items-center justify-start gap-5 text-5xl">
          <div className="scroll-container">
                <div className="scroll-content" ref={scrollContainerRef}>
                  {executives.map((exec, index) => (
                    <div
                      key={index}
                      className="w-[50vw] md:w-[20vw] relative rounded-[30px] bg-[#fcf5ed] gap-28 bg-seashell h-[502px] overflow-hidden shrink-0 text-center text-[24px] text-black font-open-sans"
                    >
                      <div
                        className="absolute w-[350px] h-[350px] top-0 left-0 bg-[#d9d9d9] bg-cover bg-center"
                        style={{ backgroundImage: `url(${exec.imageUrl})` }}
                      />
                      <div className="absolute top-[364px] left-[30px] font-semibold text-black text-[18px] lg:text-[24px] text-center leading-normal">
                        {exec.name}
                      </div>
                      <div className="absolute top-[399px] left-[30px] font-normal text-black text-[16px] lg:text-[20px] text-center leading-normal">
                        {exec.title}
                      </div>
                      <a href={exec.linkedin} target="_blank" rel="noopener noreferrer">
                        <img
                          className="top-[442px] left-[30px] absolute w-4 h-4 lg:w-7 lg:h-7"
                          alt="LinkedIn"
                          src="https://c.animaapp.com/WzNSGM6X/img/bi-linkedin.svg"
                        />
                      </a>
                    </div>
                  ))}
                </div>
          </div>
        </div>
        <div className="absolute top-[106px] left-[1211px] flex flex-row items-center justify-start gap-2.5 text-xl text-chocolate">
          <a href="" className="font-sans text-chocolate text-[24px]">View all</a>
          <img className="w-1.5 relative h-3" alt="" src="Vector.svg" />
        </div>
        <div className="hidden xl:block absolute top-[172px] left-[0px] [background:linear-gradient(270deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.8))] rounded-[30px] w-[140px] h-[482px]" />
        <div className="hidden xl:block absolute top-[172px] right-[0px] [background:linear-gradient(270deg,_rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0)_100%)] w-[140px] h-[482px]" />
    </div>
  );
}







