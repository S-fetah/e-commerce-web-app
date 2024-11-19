import React from "react";
import furniture from "../../assets/discounts/sofa-min.png";
import book from "../../assets/discounts/book-min.png";
import clothes from "../../assets/discounts/shirt-min.png";
import bag from "../../assets/discounts/bug & book-min.png";
function Discounts() {
  return (
    <section className="w-[88%] mt-[5%] grid grid-rows-[auto,1fr]  grid-cols-4 gap-x-[3%] h-[550px] m-auto  gap-y-[5%] p-5 mb-[5%] discounts ">
      <h1 className="col-span-4 ml-[2.5%] text-3xl  font-bold">
        Get Up To 70% Off
      </h1>

      <div className=" flex flex-row flex-wrap items-center  w-full content-between text-left  border-solid border  rounded-xl overflow-hidden bg-discountB discount">
        <div className="h-[40%] p-3 ml-[5%]">
          <h4 className="text-xl font-bold  p-1">Save</h4>
          <h2 className="text-5xl font-bold text-DiscountBT  p-1">$100</h2>
          <p className="text-[16px] font-normal  p-1">
            Explore Our Furniture & Home Furnishing Range
          </p>
        </div>
        <div className="w-full h-[55%] overflow-hidden .img-container  ">
          <img
            src={furniture}
            alt="Furniture"
            className="w-full h-full object-cover hover:scale-[1.2]  transition-transform ease-in-out duration-300"
          />
        </div>
      </div>

      <div className=" flex flex-row flex-wrap items-center content-between  border-solid border  rounded-xl overflow-hidden bg-DicountR discount">
        <div className="h-[40%] p-3 ml-[5%]">
          <h4 className="text-xl font-bold  p-1">Save</h4>
          <h2 className="text-5xl font-bold text-DicountRT  p-1">$29</h2>
          <p className="text-[16px] font-normal  p-1">
            Explore Our Furniture & Home Furnishing Range
          </p>
        </div>
        <div className="overflow-hidden w-full h-[55%] .img-container ">
          <img
            src={book}
            alt="Book"
            className=" w-full h-full object-cover hover:scale-[1.2] transition-transform ease-in-out duration-300"
          />
        </div>
      </div>
      <div className=" flex flex-row flex-wrap items-center content-between  border-solid border  rounded-xl overflow-hidden bg-DicountBR discount">
        <div className="h-[40%] p-3 ml-[5%]">
          <h4 className="text-xl font-bold  p-1">Save</h4>
          <h2 className="text-5xl font-bold text-DicountBRT  p-1">$64</h2>
          <p className="text-[16px] font-normal  p-1">
            Explore Our Furniture & Home Furnishing Range
          </p>
        </div>
        <div className="overflow-hidden w-full h-[55%] .img-container">
          <img
            src={clothes}
            alt="Clothes"
            className="hover:scale-[1.2]  w-full h-full object-cover transition-transform ease-in-out duration-300"
          />
        </div>
      </div>
      <div className=" flex flex-row flex-wrap items-center content-between  border-solid border  rounded-xl overflow-hidden bg-DicountG discount">
        <div className="h-[40%] p-3 ml-[5%]">
          <h4 className="text-xl font-bold  p-1">Save</h4>
          <h2 className="text-5xl font-bold text-DicountGT p-1">$89</h2>
          <p className="text-[16px] font-normal  p-1">
            Explore Our Furniture & Home Furnishing Range
          </p>
        </div>
        <div className="overflow-hidden .img-container  w-full h-[55%]  ">
          <img
            src={bag}
            alt="Bag"
            className="hover:scale-[1.2] w-full h-full object-cover transition-transform ease-in-out duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Discounts;
