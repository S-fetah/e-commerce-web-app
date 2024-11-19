import React from "react";
import Aside from "./Aside";
import List from "./List";
import briefcase from "../../assets/footer/briefcase.svg";
import helpcenter from "../../assets/footer/help-circle.svg";
import giftcard from "../../assets/footer/cd_gift.svg";
function Footer() {
  return (
    <>
      <footer className="w-[95%] max-w-[1360px] flex  justify-between m-auto flex-wrap">
        <Aside />

        <List
          props={{
            title: "Department",
            items: [
              "Fashion",
              "Education Product",
              "Frozen Food",
              "Beverages",
              "Organic Grocery",
              "Office Supplies",
              "Beauty Products",
              "Books",
              "Electronics & Gadget",
              "Travel Accessories",
              "Fitness",
              "Sneakers",
              "Toys",
              "Furniture",
            ],
          }}
        />
        <List
          props={{
            title: "About us",
            items: [
              "About Shopcart",
              "Careers",
              "News & Blog",
              "Help",
              "Press Center",
              "Shop by Location",
              "Shopcart Brands",
              "Affiliate & Partners",
              "Ideas & Guides",
            ],
          }}
        />
        <List
          props={{
            title: "Services",
            items: [
              "Gift Card",
              "Mobile App",
              "Shipping & Delivery",
              "Order Pickup",
              "Account Signup",
            ],
          }}
        />
        <List
          props={{
            title: "Help",
            items: [
              "Shopcart Help",
              "Returns",
              "Track Orders",
              "Contact Us",
              "Feedback",
              "Security & Fraud",
            ],
          }}
        />
      </footer>
      <hr className="my-[1%] h-[2px] w-[90%] m-auto bg-itemsBG " />
      <div className="w-[90%] flex flex-row justify-between m-auto items-center my-4 lastSect">
        <div className="flex  w-[40%] flex-row justify-evenly items-center text-[14px] ">
          <div className="hover:text-footerh cursor-pointer">
            <img
              src={briefcase}
              alt="BriefCase"
              className="inline-block mr-3"
            />
            <a href="#">Become A Seller</a>
          </div>
          <div className="hover:text-footerh cursor-pointer">
            <img src={giftcard} alt="giftCard" className="inline-block mr-3" />
            <a href="#">Gift Cards</a>
          </div>
          <div className="hover:text-footerh cursor-pointer">
            <img
              src={helpcenter}
              alt="Help center"
              className="inline-block mr-3"
            />
            <a href="#">Help Center</a>
          </div>
        </div>

        <div className="flex justify-between  w-[50%] text-[14px]">
          <a href="#">Terms Of Service</a>
          <a href="#">Privacy & Policy</a>
          <p>All Rights Reserved By Abdelfetah Safiddine | &copy; 2024 </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
