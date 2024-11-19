import { createSlice } from "@reduxjs/toolkit";
import airpods from "../../assets/dealsList/airpod max-min.png";
import LaptopSleeve from "../../assets/dealsList/leptop sleeve-min.png";
import folwerLSleeve from "../../assets/dealsList/flower leptop sleeve-min.png";
import waterPot from "../../assets/dealsList/water pot-min.png";
import macbookSleeve from "../../assets/dealsList/leptop sleeve macbook-min.png";
import macBook from "../../assets/dealsList/macbook 13-min.png";
import IpadMini from "../../assets/dealsList/ipad mini-min.png";
import homepad from "../../assets/homepad-mini-min.png";
import watch from "../../assets/bestSellingProducts/watch-min.png";
import adidas from "../../assets/bestSellingProducts/adidas sneakers-min.png";
import instax from "../../assets/bestSellingProducts/instax mini 11-min.png";
import waterbt from "../../assets/bestSellingProducts/water bottle-min.png";
import cabin from "../../assets/bestSellingProducts/cabin-min.png";

const initialState = {
  items: [
    {
      imageurl: airpods,
      name: "Airpods Max",
      price: "59$",
      details: "A perfect balance of high-fidelity audio",
      rating: 1044,
      stars: 5,
    },
    {
      imageurl: LaptopSleeve,
      name: "Laptop sleeve",
      price: "559$",
      details: " Organic Cotton, fairtrade certified",
      rating: 809,
      stars: 5,
    },
    {
      imageurl: folwerLSleeve,
      name: "Flower Laptop Sleeve",
      price: "39$",
      details: "15 in. x 10 in. -Flap top closure",
      rating: 65,
      stars: 5,
    },
    {
      imageurl: waterPot,
      name: "Supreme Water Bottle",
      price: "19$",
      details: "Table with air purifier, stained veneer/black",
      rating: 221,
      stars: 5,
    },
    {
      imageurl: macbookSleeve,
      name: "Laptop Sleeve MacBook",
      price: "59$",
      details: " Organic Cotton, fairtrade certified",
      rating: 321,
      stars: 5,
    },
    {
      imageurl: macBook,
      name: "Macbook pro 13",
      price: "1099$",
      details: "256, 8 core GPU, 8 GB",
      rating: 123,
      stars: 5,
    },
    {
      imageurl: IpadMini,
      name: "HomePod Mini",
      price: "59$",
      details: "5 Colors Available",
      rating: 121,
      stars: 5,
    },
    {
      imageurl: homepad,
      name: "Ipad Mini",
      price: "539$",
      details: "Table with air purifier, stained veneer/black",
      rating: 87,
      stars: 5,
    },
  ],
  topSelling: [
    {
      imageurl: instax,
      name: "instax mini 11",
      price: "89$",
      details: "Selfie mode and selfie mirror , macro mode",
      rating: 87,
      stars: 5,
    },
    {
      imageurl: watch,
      name: "Hand Wach",
      price: "63$",
      details: "Citizen 650M, W-69g",
      rating: 87,
      stars: 5,
    },
    {
      imageurl: waterbt,
      name: "Pendelton Watter Bottle",
      price: "59$",
      details: "Stanless Steel, Food safe Hand wash",
      rating: 87,
      stars: 5,
    },
    {
      imageurl: adidas,
      name: "adidas Sneakers",
      price: "139$",
      details: "x Sean Wotherspoon superstar Sneakers",
      rating: 87,
      stars: 5,
    },

    {
      imageurl: cabin,
      name: "Cabin ",
      price: "239$",
      details: "Table with air purifier stained venner/blacl",
      rating: 87,
      stars: 5,
    },
  ],
};

export const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducer: {},
});

export default dealsSlice.reducer;
