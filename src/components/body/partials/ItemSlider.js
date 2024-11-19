import React from "react";
import heart from "../../../assets/heart.svg";

function ItemSlider({ image, specifications }) {
  const { imageurl, name, price, details, rating, stars } = specifications || {
    imageurl: "",
    name: "",
    price: "",
    details: "",
    rating: "",
    stars: "",
  };
  // console.log(specifications);
  return (
    <div className="flex text-center justify-between h-fit flex-wrap w-12/12 p-2 slide  relative">
      <img
        src={heart}
        alt="Like Icon"
        className="absolute right-[5%] w-[35px] bg-white p-1 top-[5%] rounded-3xl hover:bg-DicountR cursor-pointer"
      />
      <div className="basis-full w-full flex items-center justify-center rounded-2xl bg-itemsBG   overflow-hidden p-2">
        <img
          src={image || imageurl}
          alt="Product img"
          className="slideimg h-[85%]"
        />
      </div>
      <div className="flex justify-between items-center w-full p-2">
        <h3 className="font-semibold text-xl text-left">
          {name || "Tot 1 Medium"}
        </h3>
        <p>
          <b>{price || "$99.00"}</b>
        </p>
      </div>
      <p className="basis-full self-start text-left pl-2">
        {details || "Canvas, full grain leather"}
      </p>
      <p className="text-star basis-full text-left pl-2">
        {+stars && +stars < 5
          ? `${"★".repeat(stars) + "☆".repeat(stars - 5)} `
          : "★ ★ ★ ★ ☆"}
        <span className="text-black">({rating || 30})</span>
      </p>
      <button
        className="border-[1.5px] border-[#333] rounded-3xl w-fit"
        style={{
          margin: "5%",
          padding: "2% 4%",
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ItemSlider;
