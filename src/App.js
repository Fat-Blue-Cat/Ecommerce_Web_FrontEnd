import "./App.css";
import { Footer } from "./customer/components/Footer/Footer";
import { HomeCarosel } from "./customer/components/HomeCarousel/HomeCarousel";
import { HomeSectionCarosel } from "./customer/components/HomeSectionCarousel/HomeSectionCarousel";
import Navigation from "./customer/components/Navigation/Navigation";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import { HomePage } from "./customer/components/pages/HomePage/HomePage";

function App() {
  return (
    <div className=" ">
      <Navigation></Navigation>
      <div>
        {/* <HomePage></HomePage> */}
        {/* <Product></Product> */}
        <ProductDetails></ProductDetails>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
