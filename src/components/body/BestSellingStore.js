import React from "react";
import Store from "./partials/Store";
import staples from "../../assets/Brands/brand-min.png";
import bevmo from "../../assets/Brands/brand (7)-min.png";
import kdamena from "../../assets/Brands/Ellipse 287-1.png";
import kdamelhik from "../../assets/Brands/Ellipse 287-3.png";
import brand1 from "../../assets/Stores/store one-min.png";
import brand2 from "../../assets/Stores/store four-min.png";
import brand3 from "../../assets/Stores/store three-min.png";
import brand4 from "../../assets/Stores/store two-min.png";

function BestSellingStore() {
  return (
    <section className="flex w-[95%] max-w-[1360px] m-auto my-[5%] flex-wrap justify-between  items-center align flex-row storeSect">
      <h1 className=" basis-full text-3xl font-bold text-left mb-[2%]">
        Best Selling Store
      </h1>
      <Store
        props={{
          Store: "Staples",
          details: "bag * Perfumes",
          delivery: "Delivery with in 24 hours",
          brand: staples,
          brandbg: brand1,
        }}
      />
      <Store
        props={{
          Store: "Now Delivery",
          details: "bag * Perfumes",
          delivery: "Delivery with in 24 hours",
          brand: kdamena,
          brandbg: brand4,
        }}
      />
      <Store
        props={{
          Store: "Bevmo!",
          details: "bag * Perfumes",
          delivery: "Delivery with in 24 hours",
          brand: bevmo,
          brandbg: brand3,
        }}
      />
      <Store
        props={{
          Store: "Quicklly",
          details: "bag * Perfumes",
          delivery: "Delivery with in 24 hours",
          brand: kdamelhik,
          brandbg: brand2,
        }}
      />
    </section>
  );
}

export default BestSellingStore;
