import React from "react";
import ItemSlider from "./ItemSlider";

function DealsDataList({ dataList }) {
  //   console.log(dataList);
  return (
    <div className=" flex  flex-row flex-wrap justify-evenly m-auto dataListItems">
      {dataList.map((item, index) => {
        const specifications = {
          imageurl: item.imageurl,
          name: item.name,
          details: item.details,
          price: item.price,
          rating: item.rating,
          stars: item.stars,
        };

        return (
          <div className="w-[25%] h-fit " key={index + 1}>
            <ItemSlider specifications={specifications} />
          </div>
        );
      })}
    </div>
  );
}

export default DealsDataList;
