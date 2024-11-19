import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import headphones from "../../assets/headphone-min.png";
import basecamp from "../../assets/base camp duffel 02-min.png";
import tote from "../../assets/Tote Medium-min.png";
import instax from "../../assets/instax mini 9-min.png";
import homepad from "../../assets/homepad-mini-min.png";
import watch from "../../assets/watch-min.png";
import ItemSlider from "./partials/ItemSlider";
import ProgressBar from "./partials/ProgressBar";

function TodayDeals() {
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
    initialSlide: 1,
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
    <section className="w-[85%] m-auto slidesSect h-fit mb-[5%]">
      <h1 className="basis-full ml-[3%] mb-[5%]  text-3xl  font-bold ">
        Today's Best Deals For You
      </h1>

      <Slider {...settings}>
        <ItemSlider image={headphones} />
        <ItemSlider image={basecamp} />
        <ItemSlider image={tote} />
        <ItemSlider image={instax} />
        <ItemSlider image={homepad} />
        <ItemSlider image={watch} />
        <ItemSlider image={basecamp} />
        <ItemSlider image={headphones} />
      </Slider>
      <ProgressBar value={value} />
    </section>
  );
}

export default TodayDeals;
