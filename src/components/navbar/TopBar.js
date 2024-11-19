import React from "react";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
function TopBar() {
  return (
    <div className="flex flex-row justify-around items-center p-2 topbar">
      <div className="flex flex-row items-center">
        <img src={phone} alt="" width={"20px"} /> +0669231234
      </div>

      <div className="adv">
        <span className="mr-5"> 50% Off on Highlighted Items </span> |{" "}
        <span className="ml-5">Order Now</span>
      </div>

      <div>
        <a href="$" className="flex flex-row items-center">
          <u>Location </u>
          <img src={location} alt="Location" width={"20px"} />
        </a>
      </div>
    </div>
  );
}

export default TopBar;
