import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import ItemSlider from "./partials/ItemSlider";
function MostSellingProducts() {
  const [value, setValue] = useState(0);
  let percentage = window.innerWidth > 800 ? +value / 2 : +value / 3;
  const items = useSelector((state) => state.deals.topSelling);

  useEffect(() => {}, [value, percentage]);
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
    <section className="w-[85%] m-auto  h-fit mb-[5%] mt-[3%] mostSelling ">
      <h1 className="basis-full ml-[3%] mb-[5%]  text-3xl  font-bold ">
        Most Selling Products
      </h1>

      <Slider {...settings}>
        {items.map((item, index) => {
          const specifications = {
            imageurl: item.imageurl,
            name: item.name,
            details: item.details,
            price: item.price,
            rating: item.rating,
            stars: item.stars,
          };
          return <ItemSlider specifications={specifications} key={index + 1} />;
        })}
      </Slider>
      <div className="h-2  border rounded-3xl w-[95%] m-auto  progress">
        <div
          style={{
            width: `${percentage * 100 > 100 ? 100 : percentage * 100}%`,
            backgroundColor: "#000",
            transition: "width 0.2s linear",
            height: "100%",
          }}
          className="border rounded-3xl"
        >
          .
        </div>
      </div>
    </section>
  );
}

export default MostSellingProducts;
