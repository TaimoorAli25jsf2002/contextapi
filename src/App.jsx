import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';

export default function App() {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const slides = [
    "/slides/Capture1.PNG",
     "/slides/Capture2.PNG",
      "/slides/Capture3.PNG",
        "/slides/Capture12.PNG",
       "/slides/Capture4.PNG",
        "/slides/Capture5.PNG",
         "/slides/Capture6.PNG",
          "/slides/Capture7.PNG",
           "/slides/Capture13.PNG",
           "/slides/Capture8.PNG",
            "/slides/Capture9.PNG",
             "/slides/Capture10.PNG",
              "/slides/Capture11.PNG",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") sliderRef.current.slickNext();
    if (e.key === "ArrowLeft") sliderRef.current.slickPrev();
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center bg-white"
    >
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-20 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Toggle Fullscreen
      </button>

      <div className="w-11/12 md:w-3/4 lg:w-2/3">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[80vh] object-contain rounded-lg shadow"
              />
            </div>
          ))}
        </Slider>
           <Footer />
      </div>
   
    </div>
    
  );
}