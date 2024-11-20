import book from "../../assets/NavBar/Categories/Rectangle 1436-5.png";
import sac from "../../assets/NavBar/Categories/Rectangle 1436-4.png";
import couch from "../../assets/NavBar/Categories/Rectangle.png";
import shoes from "../../assets/NavBar/Categories/Rectangle 1436-1.png";
import pc from "../../assets/NavBar/Categories/Rectangle 1436-2.png";
import casque from "../../assets/NavBar/Categories/Rectangle 1436-3.png";
const CategoryList = () => {
  return (
    <li className="max-w-[589px] m-auto max-h-[389px] pt-[30px] px-[30px] pb-[20px]  mlist">
      <h2 className="text-left font-semibold border-b border-[#ccc] text-black w-[515px] m-auto pr-[20px] pb-[20px] mb-6 ">
        Popular Categories
      </h2>

      <ul className="list-none grid grid-cols-2 gap-x-7 grid-rows-3 gap-y-7  max-w-[515px] h-[274px]">
        <li className="flex flex-row items-center justify-start  bg-catColor rounded-lg w-[211px] h-[70px] mlistitem cursor-pointer">
          <a
            href="/"
            className="flex flex-row items-center justify-start  bg-catColor rounded-lg w-[211px] h-[70px]  "
          >
            <span href="$">
              <img src={couch} className="mr-3" alt="couch" />
            </span>
            <div>
              <h3 className="font-semibold text-black text-left">Furniture</h3>
              <p className="text-[14px] text-[#667] font-normal">
                40 items available
              </p>
            </div>
          </a>
        </li>
        <li className="flex flex-row items-center justify-start  bg-catColor rounded-lg w-[211px] h-[70px] mlistitem cursor-pointer">
          <a
            href="/"
            className="flex flex-row items-center justify-start  bg-catColor rounded-lg w-[211px] h-[70px]  "
          >
            <span href="$">
              <img src={sac} className="mr-3" alt="sac" />
            </span>
            <div>
              <h3 className="font-semibold text-black text-left">Hand Bag</h3>
              <p className="text-[14px] text-[#667] font-normal">
                40 items available
              </p>
            </div>
          </a>
        </li>

        <li className="flex flex-row items-center justify-start  bg-catColor rounded-lg w-[211px] h-[70px] mlistitem cursor-pointer">
          <a
            href="/"
            className="flex flex-row items-center justify-start  bg-catColor rounded-lg w-[211px] h-[70px]  "
          >
            <span href="$">
              <img src={shoes} className="mr-3" alt="shoes" />
            </span>
            <div>
              <h3 className="font-semibold text-black text-left">Shoes</h3>
              <p className="text-[14px] text-[#667] font-normal">
                40 items available
              </p>
            </div>
          </a>
        </li>
        <li className="flex flex-row items-center justify-start  bg-catColor rounded-lg w-[211px] h-[70px] mlistitem cursor-pointer">
          <a
            href="/"
            className="flex flex-row items-center justify-start  bg-catColor rounded-lg w-[211px] h-[70px]  "
          >
            <span href="$">
              <img src={casque} className="mr-3" alt="casque" />
            </span>
            <div>
              <h3 className="font-semibold text-black text-left">Headphones</h3>
              <p className="text-[14px] text-[#667] font-normal">
                40 items available
              </p>
            </div>
          </a>
        </li>

        <li className="flex flex-row items-center justify-start  bg-catColor rounded-lg w-[211px] h-[70px] mlistitem cursor-pointer">
          <a
            href="/"
            className="flex flex-row items-center justify-start  bg-catColor rounded-lg w-[211px] h-[70px]  "
          >
            <span href="$">
              <img src={pc} className="mr-3" alt="pc" />{" "}
            </span>
            <div>
              <h3 className="font-semibold text-black text-left">Laptop</h3>
              <p className="text-[14px] text-[#667] font-normal">
                40 items available
              </p>
            </div>
          </a>
        </li>
        <li className="flex flex-row items-center justify-start  bg-catColor rounded-lg w-[211px] h-[70px] mlistitem cursor-pointer">
          <a
            href="/"
            className="flex flex-row items-center justify-start  bg-catColor rounded-lg w-[211px] h-[70px]  "
          >
            <span href="$" className="text-center">
              <img src={book} className="mr-3" alt="book" />
            </span>
            <div>
              <h3 className="font-semibold text-left text-black ">Book</h3>
              <p className="text-[14px] text-[#667] font-normal">
                240 items available
              </p>
            </div>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default CategoryList;
