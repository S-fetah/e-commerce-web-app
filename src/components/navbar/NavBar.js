import React, { useState, useRef, useEffect } from "react";
import acc from "../../assets/NavBar/user.png";
import webIcon from "../../assets/bannerPics/Logo.svg";
import cart from "../../assets/NavBar/shopping-cart-add.png";

import search from "../../assets/NavBar/search.svg";
import Category from "./Category";
import MobileCategory from "./MobileCategory";
import { AlignJustify } from "lucide-react";
import CategoryList from "./CategoryList";

function NavBar() {
  const [list, setList] = useState(false);
  const [mobileList, setMobileList] = useState(false);
  const [pos, setPos] = useState("");
  const buttonRef = useRef(null);
  const categoryRef = useRef(null);

  const getData = (dataState) => {
    // console.log(dataState);
    if (Object.hasOwn(dataState, "state")) {
      // console.log(dataState.state);
      setMobileList(dataState.state);
      setPos(dataState.pos);
      if (!dataState.state) {
        setPos("");
      }
    } else {
      setPos("null");
      setMobileList(dataState);
    }
  };

  const hiddenList = () => (
    <ul
      className={`w-[100%] absolute bg-white border  border-white rounded-[10px] min-h-[220px]  flex justify-evenly flex-row flex-wrap  top-0 ${
        mobileList ? "translate-y-[13%] " : "translate-y-[35%] "
      } -translate-x-[40px] z-[25]  text-center mb ${pos ? "pos" : ""}`}
    >
      <li>
        <MobileCategory dataState={getData} />
      </li>
      {mobileList && <CategoryList categoryRef={categoryRef} />}
      <li className=" px-2.5 py-[5px]">
        <a href="/deals">Deals</a>
      </li>
      <li className=" px-2.5 py-[5px]">
        <a href="/news">What's new</a>
      </li>
      <li className=" px-2.5 py-[5px]">
        <a href="/delivery">Delivery</a>
      </li>
    </ul>
  );

  const handleClick = (e) => {
    setList(!list);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // console.log(event.target);
      // console.log(categoryRef.current);
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        categoryRef.current &&
        !categoryRef.current.contains(event.target)
      ) {
        const button = document.getElementsByClassName("hidden")[0];
        button.className = "hidden text-black ";
        setList(false);
      }
    };

    const handleWindowBlur = () => {
      const button = document.getElementsByClassName("hidden")[0];
      button.className = "hidden text-black ";
      setList(false);
    };
    const handleResize = () => {
      const button = document.getElementsByClassName("hidden")[0];
      button.className = "hidden text-black ";
      if (window.innerWidth > 1100) {
        setList(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-full py-[15px] ">
      <section className="max-w-[1360px] f-full max-h-[82px] flex flex-row m-auto justify-between px-[40px] items-center font-semibold  header relative ">
        <a className="flex flex-row items-center cursor-pointer " href="/">
          <img src={webIcon} alt="Icon" />
        </a>

        <div className="flex flex-row justify-between w-[784px] h-[52px] items-center navlinks">
          <ul className="flex items-center  w-[55%]">
            <li className=" ">
              <Category />
            </li>
            <li className=" px-2.5 py-[5px]">
              <a href="/">Deals</a>
            </li>
            <li className=" px-2.5 py-[5px]">
              <a href="/">What's new</a>
            </li>
            <li className=" px-2.5 py-[5px]">
              <a href="/">Delivery</a>
            </li>
          </ul>

          <form action="" className="relative text-center ml-[65px]">
            <input
              type="search"
              placeholder="Search Products"
              className=" h-[40px]  py-2 pl-5 pr-[50px] w-[320px] rounded-[100px] border-[#bbb9b9] border font-normal text-sm"
              required
            />
            <button type="submit  ">
              <img
                src={search}
                alt=""
                className="absolute right-0 top-0 cursor-pointer h-[40px] w-[60px] py-[9px]  px-[15px]"
              />
            </button>
          </form>
        </div>
        <div className="flex justify-between w-[189px] p-0 both">
          <a href="/Account" className="text-center flex gap-2">
            <img src={acc} alt="acc icon" className="acc" />
            <span className="inline-block text-sm ">Account</span>
          </a>

          <a className="flex items-center gap-2 " href="/Cart">
            <img src={cart} alt="cart icon" className="cart" />
            <h4 className="text-sm ">Cart</h4>
          </a>
        </div>

        <button
          ref={buttonRef}
          className={`hidden text-black ${list ? "clicked" : ""}`}
          onClick={handleClick}
        >
          <AlignJustify />
        </button>
        {list && hiddenList()}
      </section>
    </nav>
  );
}

export default NavBar;
