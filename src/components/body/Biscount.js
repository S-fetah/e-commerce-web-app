import React, { useEffect, useRef, useState } from "react";
import biscount from "../../assets/bannerPics/biscount banner-min.png";

function Biscount() {
  const imgRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // console.log(imgRef.current);
        // Calculate distance of the element's center from the viewport center
        const distanceToCenter = Math.abs(
          rect.top + rect.height / 2 - windowHeight / 2
        );
        // console.log(imgRef.current.getBoundingClientRect());
        // console.log(rect.top);
        // console.log(rect.height);

        // Calculate scale based on distance from center, maxing out at 1.2 when centered
        const maxDistance = windowHeight / 2;
        const scaleValue = 1 + (1 - distanceToCenter / maxDistance) * 0.2;

        setScale(Math.max(1, Math.min(1.5, scaleValue)));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="my-container w-full  mt-[7%] relative  mb-[7%]">
      <div
        ref={imgRef}
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.1s ease-out",
          overflow: "hidden",
        }}
      >
        <img
          src={biscount}
          alt="Discount Banner"
          className="w-[100vw] h-[700px]"
        />
      </div>
      <div className="w-[80%] h-[50%]  text-white">
        <div className=" flex items-center flex-col text-center justify-center h-[65%] w-[500px] right-[10%] absolute top-[15%] bg-biscountT ">
          <h1 className="absolute text-5xl top-[10%] font-bold">Get 5% Cash</h1>
          <h1 className="absolute text-5xl top-[25%] font-bold ">
            {" "}
            Back On $200
          </h1>
          <p className="absolute text-2xl top-[40%] p-5 ">
            Shopping is a bit of a relaxing for me, which is something troubling
            for the bank balance
          </p>
          <button className="absolute text-xl top-[70%] font-semibold pl-[2%] pr-[2%] pt-[2%] pb-[2%] border border-white rounded-[100px] w-[29%] hover:bg-bannerbtn hover:border-bannerbtn transition-colors duration-200 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Biscount;
