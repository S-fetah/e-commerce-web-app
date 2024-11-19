import React from "react";
import webIcon from "../../assets/bannerPics/Logo.svg";
import stipe from "../../assets/Payment/stripe.png";
import visa from "../../assets/Payment/visa.png";
import paypal from "../../assets/Payment/PayPal.png";
import mastercard from "../../assets/Payment/Mastercard.png";
import klarna from "../../assets/Payment/Klarna.png";
import googlepay from "../../assets/Payment/GooglePay.png";
import applepay from "../../assets/Payment/ApplePay.png";
import amazon from "../../assets/Payment/Amazon.png";
function Aside() {
  return (
    <aside className="w-[40%]">
      <img src={webIcon} alt="Icon" className="block my-2" />
      <p>
        We provide the best deals that are now available in the market , Here
        you can check all our departement's , Services , Contact and reach for
        our Help{" "}
      </p>
      <div>
        <h1 className="font-bold my-5 ml-4"> Accepted Payments</h1>
        <div className="flex w-[60%] flex-row flex-wrap gap-1 justify-center items-center">
          <div className="footer-icon-container">
            <img src={stipe} alt="stipe" className="footer-icon" />
          </div>
          <div className="footer-icon-container">
            <img src={visa} alt="visa" className="footer-icon" />
          </div>
          <div className="footer-icon-container">
            <img src={mastercard} alt="mastercard" className="footer-icon" />
          </div>
          <div className="footer-icon-container">
            <img src={amazon} alt="amazon" className="footer-icon" />
          </div>
          <div className="footer-icon-container">
            <img src={klarna} alt="klarna" className="footer-icon" />
          </div>
          <div className="footer-icon-container">
            <img src={paypal} alt="paypal" className="footer-icon" />
          </div>
          <div className="footer-icon-container">
            <img src={applepay} alt="applepay" className="footer-icon" />
          </div>
          <div className="footer-icon-container">
            <img src={googlepay} alt="googlepay" className="footer-icon" />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
