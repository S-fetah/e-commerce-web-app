import React from "react";
import icon from "../../../assets/Stores/Icon.png";
function Store({ props }) {
  const { Store, details, delivery, brand, brandbg } = props;
  return (
    <div className="flex flex-col items-center overflow-hidden  store  relative">
      <div className="w-full overflow-hidden">
        <img
          src={brandbg}
          alt="Store"
          className=" brandbg transition-transform duration-500 ease-in-out hover:scale-[1.2] border rounded-2xl hover:rotate-[10deg] "
        />
      </div>
      <div className="w-full p-10">
        <img
          src={brand}
          alt={Store}
          className="absolute -translate-y-[120%] -translate-x-[35%] h-[62px] border border-white rounded-[110px]"
        />
        <h5 className=" text-[18px] font-semibold ">{Store}</h5>
        <p className="text-[12px] text-left p-1"> {details}</p>
        <span className="text-[12px] m-auto block p-1 text-center text-tagc">
          <img src={icon} alt="tag icon" className="inline-block" /> {delivery}
        </span>
      </div>
    </div>
  );
}

export default Store;
