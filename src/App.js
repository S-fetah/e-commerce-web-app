import "./App.css";

import Banner from "./components/body/Banner";
import BestSellingStore from "./components/body/BestSellingStore";
import Biscount from "./components/body/Biscount";
import Brands from "./components/body/Brands";
import DealsList from "./components/body/DealsList";
import Discounts from "./components/body/Discounts";
import LastBanner from "./components/body/LastBanner";
import MostSellingProducts from "./components/body/MostSellingProducts";
import Services from "./components/body/Services";
import TodayDeals from "./components/body/TodayDeals";
import TopCatergories from "./components/body/TopCatergories";
import TrendingProducts from "./components/body/TrendingProducts";
import WeeklyDeals from "./components/body/WeeklyDeals";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import TopBar from "./components/navbar/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Banner />
      <TopCatergories />
      <TodayDeals />
      <Brands />
      <Discounts />
      <WeeklyDeals />
      <Biscount />
      <DealsList />
      <LastBanner />
      <MostSellingProducts />
      <TrendingProducts />
      <BestSellingStore />
      <Services />
      <hr className="my-[5%] h-[2px] w-[90%] m-auto bg-itemsBG" />
      <Footer />
    </>
  );
}

export default App;
