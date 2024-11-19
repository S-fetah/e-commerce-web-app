import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import basecamp from "../../assets/base camp duffel 02-min.png";

import tote from "../../assets/Tote Medium-min.png";
import instax from "../../assets/instax mini 9-min.png";
import homepad from "../../assets/homepad-mini-min.png";
import watch from "../../assets/watch-min.png";
import valiza from "../../assets/cabin-min.png";
import riha from "../../assets/pendleton water bottle-min.png";
import ItemSlider from "./partials/ItemSlider";
import ProgressBar from "./partials/ProgressBar";

function WeeklyDeals() {
  const [value, setValue] = useState(0);

  useEffect(() => {}, [value]);
  const settings = {
    className: "center h-11/12 text-center gap-5 w-full",
    infinite: false,
    centerPadding: "10px",
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    arrows: true,
    afterChange: (index) => {
      // console.log(`%c Slider Changed To Index SIUUUUU ${index + 1}`);
      setValue(index);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: 0,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <section className="w-[85%] m-auto slidesSect h-fit mb-[5%] ">
      <h1 className="basis-full ml-[3%] mb-[6%]  text-3xl  font-bold ">
        Weekly Popular Products
      </h1>
      <Slider {...settings}>
        <ItemSlider image={valiza} />
        <ItemSlider image={instax} />
        <ItemSlider image={watch} />
        <ItemSlider image={homepad} />
        <ItemSlider image={basecamp} />
        <ItemSlider image={tote} />
        <ItemSlider image={watch} />
        <ItemSlider image={riha} />
      </Slider>
      <ProgressBar value={value} />
    </section>
  );
}

export default WeeklyDeals;
