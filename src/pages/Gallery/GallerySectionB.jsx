import { Slider, Heading } from "../../components";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GallerySectionB() {
  const [galleryData, setGalleryData] = useState(null); // Only one item
  const [sliderState, setSliderState] = useState(0);
  const sliderRef = React.useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch gallery data from backend
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get("https://faculty-backend-55jd.onrender.com/getGallery");
        setGalleryData(response.data[1]); // Fetch only the first item
        console.log(response.data[1]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching gallery data:", err.message);
        setError("Failed to fetch gallery data.");
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  if (loading) return <div>Loading gallery...</div>;
  if (error) return <div>{error}</div>;

  if (!galleryData) return <div>No data available.</div>;

  return (
    <div className="flex flex-col items-center">
      <div className="container-sm flex flex-col items-start gap-[30px] md:px-5">
        <Heading
          size="text5x1"
          as="h2"
          className="text-[40px] font-medium md:text-[38px] sm:text-[36px]"
        >
          {galleryData.title}
        </Heading>
        <div className="flex flex-col items-center gap-[42px] self-stretch">
          <div className="mx-auto flex w-full gap-5 self-stretch md:mx-0 md:flex-col">
            <Slider
              autoplay
              autoPlayInterval={2000}
              responsive={{
                0: { items: 1 },
                551: { items: 1 },
                1051: { items: 3 },
              }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => setSliderState(e?.item)}
              ref={sliderRef}
              items={galleryData.images.map((imageUrl, imgIndex) => (
                <React.Fragment key={imgIndex}>
                  <div className="px-2.5">
                    <div
                      className="h-[280px] bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                      }}
                    />
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="flex items-center justify-center">
            {[...Array(Math.ceil(galleryData.images.length / (sliderRef?.current?.state?.itemsInSlide || 1)))].map((_, i) => (
              <div
                key={i}
                onClick={() =>
                  sliderRef?.current?.slideTo(i * (sliderRef?.current?.state?.itemsInSlide || 1))
                }
                className={`mr-1.5 inline-block h-[16px] w-[16px] cursor-pointer rounded-[50%] ${
                  sliderState >=
                    i * (sliderRef?.current?.state?.itemsInSlide || 1) &&
                  sliderState <
                    (i + 1) * (sliderRef?.current?.state?.itemsInSlide || 1)
                    ? "bg-[#d9d9d9]"
                    : "bg-[#d9d9d9]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
