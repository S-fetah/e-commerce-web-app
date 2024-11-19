import React from "react";
import clothes from "../../assets/bannerPics/Fashion world-min.png";
import furniture from "../../assets/bannerPics/biscount banner-min.png";

function TrendingProducts() {
  return (
    <section className="w-[95%] max-w-[1360px] mx-auto my-10 grid grid-rows-[auto,1fr] gap-y-8 trending">
      <h1 className="text-3xl font-bold text-left">
        Trending Products For You!
      </h1>
      <div className="grid grid-cols-2 gap-8 items-center">
        {/* Furniture Card */}
        <div className="text-left border border-itembg overflow-hidden rounded-xl flex flex-col">
          <div className="h-[350px] w-full overflow-hidden">
            <img
              src={furniture}
              alt="Furniture"
              className="w-full h-full object-cover hover:scale-[1.2] transition-transform ease-in-out duration-300"
            />
          </div>
          <div className="p-5 bg-itemsBG flex flex-col gap-3">
            <h4 className="text-xl font-bold">Furniture Village</h4>
            <p className="text-[16px] font-normal">Delivery within 24 hours</p>
            <button className="self-start text-[18px] font-normal mt-2 px-5 py-2 border-[#333] border-[1.5px] rounded-full bg-black text-white hover:bg-itemBtnHover  transition-all ease-in-out duration-200">
              Shop Now
            </button>
          </div>
        </div>

        {/* Clothes Card */}
        <div className="text-left border border-itembg overflow-hidden rounded-xl flex flex-col">
          <div className="h-[350px] w-full overflow-hidden">
            <img
              src={clothes}
              alt="Clothes"
              className="w-full h-full object-cover hover:scale-[1.2] transition-transform ease-in-out duration-300"
            />
          </div>
          <div className="p-5 bg-itemsBG flex flex-col gap-3">
            <h4 className="text-xl font-bold">Fashion World</h4>
            <p className="text-[16px] font-normal">Delivery within 24 hours</p>
            <button className="self-start text-[18px] font-normal mt-2 px-5 py-2 border-[#333] bg-black text-white border-[1.5px] rounded-full hover:bg-itemBtnHover transition-all ease-in-out duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingProducts;
