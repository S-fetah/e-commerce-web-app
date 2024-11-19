import React from "react";
import shopStore from "../../assets/bannerPics/bg-stage.png";
import webBg from "../../assets/bannerPics/wbBg.png";
import games from "../../assets/bannerPics/games.png";
import tour from "../../assets/bannerPics/tour-min.png";
import other from "../../assets/bannerPics/other-min.png";
import snacks from "../../assets/bannerPics/snaks-min.png";

function Banner() {
  return (
    <div
      className="relative max-w-full overflow-hidden h-[650px] flex text-center flex-wrap text-wrap p-2.5 banner"
      style={{
        backgroundImage: `url(${webBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1
        className="text-bannerTextColor text-left absolute top-[20%] left-[5%] text-[64px] font-[750] z-20"
        style={{ wordSpacing: "0.5rem" }}
      >
        Shopping And
      </h1>
      <h1
        className="text-bannerTextColor text-left absolute top-[32%] left-[5%] text-[64px] font-[750] z-20 second"
        style={{ wordSpacing: "0.4rem" }}
      >
        Departement Store
      </h1>
      <p className="text-bannerTextColor text-left absolute top-[52%] left-[5%] text-[20px] font-normal z-20 p-2.5 ">
        Shopping is a bit of a relaxing hobby for me, which <br /> is sometimes
        troubling for the bank balance.
      </p>
      <button className="text-white font-bold w-fit text-center absolute top-[70%] left-[9%] text-[16px] border-bannerTextColor border rounded-[110px]  z-10 pl-10 pr-10 pt-4 pb-4">
        Learn More
      </button>

      <img
        src={snacks}
        alt="Snacks"
        className="absolute w-[16%] top-[55%] right-[35%] mr-[6px] z-10"
      />
      <img
        src={tour}
        alt="tour "
        className="absolute w-[12%] top-[25%] right-[28%] z-10"
      />
      <img
        src={other}
        alt="other"
        className="absolute w-[18%] top-[12%] right-[8%] z-10 "
      />
      <img
        src={games}
        alt="games"
        className="absolute w-[16%] top-[47%] right-[13%] z-10"
      />

      <img
        src={shopStore}
        alt=""
        style={{ height: "95%", right: 0, position: "absolute", zIndex: 0 }}
        className="stage"
      />
    </div>
  );
}

export default Banner;
