// Updated TopCategories Component
import React from "react";
import furniture from "../../assets/Furniture-min.png";
import books from "../../assets/books-min.png";
import handbag from "../../assets/e_hand bag-min.png";
import tech from "../../assets/tech-min.png";
import travel from "../../assets/travel-min.png";
import sneakers from "../../assets/sneakers-min.png";

function TopCategories() {
  return (
    <main className="flex flex-row justify-between flex-wrap gap-x-[1%] mt-[5%] p-2 mb-[5%] text-2xl topCategory  font-semibold w-[85%] m-auto">
      <h1 className="basis-full ml-[2.5%] text-3xl mb-[2.5%] font-bold">
        Shop Our Top Categories
      </h1>
      <section className="relative text-white item text-center ">
        <h3 className="absolute top-[10%] text-center">Furnitures</h3>
        <div className="img-container">
          <img
            src={furniture}
            alt=""
            className=" border border-solid rounded-xl"
          />
        </div>
      </section>
      <section className="relative text-white item text-center">
        <h3 className="absolute top-[10%]  text-center">Hand Bag</h3>
        <div className="img-container">
          <img
            src={handbag}
            alt=""
            className="border border-solid rounded-xl"
          />
        </div>
      </section>
      <section className="relative text-white item text-center">
        <h3 className="absolute top-[10%]  text-center">Books</h3>
        <div className="img-container">
          <img src={books} alt="" className="border border-solid rounded-xl" />
        </div>
      </section>
      <section className="relative text-white item text-center">
        <h3 className="absolute top-[10%] text-center">Tech</h3>
        <div className="img-container">
          <img src={tech} alt="" className="border border-solid rounded-xl" />
        </div>
      </section>
      <section className="relative text-white item text-center">
        <h3 className="absolute top-[10%]  text-center">Sneakers</h3>
        <div className="img-container">
          <img
            src={sneakers}
            alt=""
            className="border border-solid rounded-xl"
          />
        </div>
      </section>
      <section className="relative text-white item text-center ">
        <h3 className="absolute top-[10%]  text-center">Travel</h3>
        <div className="img-container">
          <img src={travel} alt="" className="border border-solid rounded-xl" />
        </div>
      </section>
    </main>
  );
}

export default TopCategories;
