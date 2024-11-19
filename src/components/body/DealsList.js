import React, { useState } from "react";
import DealsDataList from "./partials/DealsDataList";
import { useSelector } from "react-redux";
function DealsList() {
  const dataList = useSelector((state) => state.deals.items);
  const [data, setData] = useState(dataList);

  const handleClick = () => {
    console.log(dataList);
    setData(dataList);
  };
  return (
    <section className="w-[90%] max-w-[1360px] m-auto  h-fit mb-[5%] mt-[10%]  ">
      <h1 className="text-3xl mt-[2%] font-bold mb-[2%]   ">
        Today's Best Deals For You
      </h1>
      {/* flex flex-row justify-around  flex-nowrap items-center */}

      <div className=" p-2 flex flex-row flex-wrap items-center mb-[3%]  m-auto gap-2">
        <button
          className="border-black font-bold w-fit text-center  text-sm  border rounded-[110px]  pl-5 pr-5 pt-2.5 pb-2.5 inline-block focus:bg-itemBtnHover focus:text-white focus:border-white "
          onClick={handleClick}
          ac
        >
          Gadgets
        </button>
        <button
          className="border-black font-bold w-fit text-center  text-sm  border rounded-[110px]  pl-5 pr-5 pt-2.5 pb-2.5 inline-block   focus:bg-itemBtnHover focus:text-white focus:border-white "
          onClick={handleClick}
        >
          Fashion
        </button>
        <button
          className="border-black font-bold w-fit text-center  text-sm  border rounded-[110px]  pl-5 pr-5 pt-2.5 pb-2.5 inline-block   focus:bg-itemBtnHover focus:text-white focus:border-white "
          onClick={handleClick}
        >
          Toys
        </button>
        <button
          className="border-black font-bold w-fit text-center  text-sm  border rounded-[110px]  pl-5 pr-5 pt-2.5 pb-2.5 inline-block  focus:bg-itemBtnHover focus:text-white focus:border-white"
          onClick={handleClick}
        >
          Education
        </button>
        <button
          className="border-black font-bold w-fit text-center  text-sm  border rounded-[110px]  pl-5 pr-5 pt-2.5 pb-2.5 inline-block   focus:bg-itemBtnHover focus:text-white focus:border-white"
          onClick={handleClick}
        >
          Beauty
        </button>
        <button
          className="border-black font-bold w-fit text-center  text-sm  border rounded-[110px]  pl-5 pr-5 pt-2.5 pb-2.5 inline-block   focus:bg-itemBtnHover focus:text-white focus:border-white"
          onClick={handleClick}
        >
          Fitness
        </button>
        <button
          className="border-black font-bold w-fit text-center  text-sm  border rounded-[110px]  pl-5 pr-5 pt-2.5 pb-2.5 inline-block  focus:bg-itemBtnHover focus:text-white focus:border-white "
          onClick={handleClick}
        >
          Furniture
        </button>
        <button
          className="border-black font-bold w-fit text-center  text-sm  border rounded-[110px]  pl-5 pr-5 pt-2.5 pb-2.5 inline-block   focus:bg-itemBtnHover focus:text-white focus:border-white"
          onClick={handleClick}
        >
          Sneakers
        </button>
      </div>

      <DealsDataList dataList={dataList} />
    </section>
  );
}

export default DealsList;
