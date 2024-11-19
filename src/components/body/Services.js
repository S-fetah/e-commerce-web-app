import React from "react";
import Service from "./partials/Service";
import woman from "../../assets/Services/faq-min.png";
import payment from "../../assets/Services/onlie payment-min.png";
import home from "../../assets/Services/home delivery-min.png";
function Services() {
  return (
    <section className=" w-[95%]  max-w-[1360px] m-auto my-[5%]">
      <div className=" w-full flex flex-row gap-2 justify-between  flex-wrap items-start  services ">
        <Service
          props={{
            title: "Frequenlty Asked Questions",
            body: " Updated On Safe SHopping in our Stores",
            img: woman,
          }}
        />
        <Service
          props={{
            title: "Online Payment Process",
            body: " Updated On Safe SHopping in our Stores",
            img: payment,
          }}
        />
        <Service
          props={{
            title: "Home Delivery Options",
            body: " Updated On Safe SHopping in our Stores",
            img: home,
          }}
        />
      </div>
    </section>
  );
}

export default Services;
