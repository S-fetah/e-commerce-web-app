import React from "react";
import card1 from "../../assets/bannerPics/c_visa card-min.png";
import card2 from "../../assets/bannerPics/visa card 02-min.png";
import card3 from "../../assets/bannerPics/visa card 03.svg";

function LastBanner() {
  return (
    <div className="w-full bg-lbg h-[340px] flex items-center justify-center">
      <div className="w-full max-w-[1200px] h-[80%] flex flex-row md:flex-row justify-around items-center text-[#333] lastBanner">
        {/* Text Section */}
        <div className="text-left w-[40%] md:w-[40%] h-[90%] mb-4 md:mb-0  lastBannerText ">
          <h2 className="font-bold md:text-[52px] mb-10 leading-[49px]  ">
            Get 5% Cash Back
          </h2>
          <p className="text-lg md:text-xl font-medium mb-10">onShopCart.com</p>

          <button className="text-white font-medium w-fit text-center text-[18px] border-bannerTextColor bg-bannerTextColor border rounded-[110px]  pl-10 pr-10 pt-4 pb-4 hover:bg-[#272626] ">
            Learn More
          </button>
        </div>

        <div className="relative w-[90%]  md:w-[30%] h-[220px] lastBannerCards">
          <img
            src={card1}
            alt="card1"
            className="absolute h-[60%] top-0 left-1/2 transform -translate-x-1/2 scale-[1.2] rotate-[-30deg] z-10"
          />
          <img
            src={card2}
            alt="card2"
            className="absolute h-[60%] top-[10%] left-1/2 transform -translate-x-1/2 scale-[1.2] rotate-[-20deg] z-[9]"
          />
          <img
            src={card3}
            alt="card3"
            className="absolute h-[60%] top-[20%] left-1/2 transform -translate-x-1/2 scale-[1.2] rotate-[-10deg] z-[8]"
          />
        </div>
      </div>
    </div>
  );
}

export default LastBanner;
