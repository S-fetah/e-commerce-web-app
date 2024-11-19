import React, { useEffect, useState, useRef } from "react";

import book from "../../assets/NavBar/Categories/Rectangle 1436-5.png";
import sac from "../../assets/NavBar/Categories/Rectangle 1436-4.png";
import couch from "../../assets/NavBar/Categories/Rectangle.png";
import shoes from "../../assets/NavBar/Categories/Rectangle 1436-1.png";
import pc from "../../assets/NavBar/Categories/Rectangle 1436-2.png";
import casque from "../../assets/NavBar/Categories/Rectangle 1436-3.png";
import { ChevronDown, ChevronUp } from "lucide-react";

function Category() {
  const [show, setShow] = useState(false);
  const categoryRef = useRef(null);
  const handleClick = (e) => {
    setShow(!show);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 990) {
        setShow(false);
      }
    };

    const handleOutsideClick = (event) => {
      if (categoryRef.current && categoryRef.current.contains(event.target)) {
      } else {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  });

  const catergoryList = () => {
    return (
      <div className="absolute top-0 left-0 translate-y-[15%] list   ">
        <h2 className="text-left pr-5 pb-5 mb-6  font-semibold border-b border-[#ccc] text-black">
          Popular Categories
        </h2>

        <ul className="list-none grid grid-cols-2 gap-x-7 grid-rows-3 gap-y-7">
          <li className="flex flex-row items-center justify-start pl-1 bg-catColor rounded-lg">
            <a href="$">
              <img src={couch} className="mr-3" alt="" />
            </a>
            <div>
              <h3 className="font-semibold text-black text-left">Books</h3>
              <p className="text-[14px] text-[#667]">40 items available</p>
            </div>
          </li>
          <li className="flex flex-row items-center justify-start pl-1 bg-catColor rounded-lg">
            <a href="$">
              <img src={sac} className="mr-3" alt="" />
            </a>
            <div>
              <h3 className="font-semibold text-black text-left">Agendas</h3>
              <p className="text-[14px] text-[#667]">40 items available</p>
            </div>
          </li>
          <li className="flex flex-row items-center justify-start pl-1 bg-catColor rounded-lg">
            <a href="$">
              <img src={shoes} className="mr-3" alt="" />
            </a>
            <div>
              <h3 className="font-semibold text-black text-left">
                Official Documents
              </h3>
              <p className="text-[14px] text-[#667]">40 items available</p>
            </div>
          </li>
          <li className="flex flex-row items-center justify-start pl-1 bg-catColor rounded-lg">
            <a href="$">
              <img src={casque} className="mr-3" alt="" />{" "}
            </a>
            <div>
              <h3 className="font-semibold text-black text-left">
                Medical Papers
              </h3>
              <p className="text-[14px] text-[#667]">40 items available</p>
            </div>
          </li>

          <li className="flex flex-row items-center justify-start pl-1 bg-catColor rounded-lg">
            <a href="$">
              <img src={pc} className="mr-3" alt="" />{" "}
            </a>
            <div>
              <h3 className="font-semibold text-black text-left">Gif Boxes</h3>
              <p className="text-[14px text-[#667]">40 items available</p>
            </div>
          </li>
          <li className="flex flex-row items-center justify-start pl-1 bg-catColor rounded-lg">
            <a href="$" className="text-center">
              <img src={book} className="w-20" alt="" />{" "}
            </a>
            <div>
              <h3 className="font-semibold text-left text-black ">
                Explore Others
              </h3>
              <p className="text-[14px] text-[#667]">Des Kda Items available</p>
            </div>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <div
      className={`category relative text-center flex items-center justify-between  text-nowrap  mt-1 px-2.5 py-[16px] pr-[16px] ${
        show ? "active" : ""
      } `}
      onClick={handleClick}
      ref={categoryRef}
    >
      Category
      {show ? (
        <span className="inline">
          <ChevronUp />
        </span>
      ) : (
        <span className="inline ">
          <ChevronDown size={20} strokeWidth={2.5} />
        </span>
      )}
      {show && catergoryList()}
    </div>
  );
}

export default Category;
