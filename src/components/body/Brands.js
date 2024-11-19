import React from "react";
import staples from "../../assets/Brands/brand-min.png";
import target from "../../assets/Brands/brand (1)-min.png";
import ContainerStore from "../../assets/Brands/brand (2)-min.png";
import SportsBasement from "../../assets/Brands/brand (4)-min.png";
import GroceryOutlet from "../../assets/Brands/brand (5)-min.png";
import MollieStones from "../../assets/Brands/brand (6)-min.png";
import BevMo from "../../assets/Brands/brand (7)-min.png";
import Sprouts from "../../assets/Brands/brand (8)-min.png";
import Brand from "./partials/Brand";
const brands = [
  {
    title: "staples",
    url: staples,
  },
  {
    title: "Container Store",
    url: ContainerStore,
  },
  {
    title: "Target",
    url: target,
  },
  {
    title: "Sports Basement",
    url: SportsBasement,
  },
  {
    title: "Grocery Outlet",
    url: GroceryOutlet,
  },
  {
    title: "Mollie Stones",
    url: MollieStones,
  },
  {
    title: "Sprouts",
    url: Sprouts,
  },
  {
    title: "BevMo!",
    url: BevMo,
  },
];
function Brands() {
  return (
    <div className="w-[85%] m-auto brandList grid grid-rows-[auto,auto,auto] gap-4">
      <h1 className="font-bold text-3xl  mb-[2%] row-span-1">
        Choose By Brand
      </h1>

      <div className="grid grid-cols-4 gap-y-4 gap-x-2 row-span-2 brandContainer ">
        {brands.map((e, index) => (
          <Brand title={e.title} url={e.url} index={index} key={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default Brands;
