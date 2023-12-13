import "./App.css";
import { HomeCarosel } from "./customer/components/HomeCarousel/HomeCarousel";
import { HomeSectionCarosel } from "./customer/components/HomeSectionCarousel/HomeSectionCarousel";
import Navigation from "./customer/components/Navigation/Navigation";
import { HomePage } from "./customer/components/pages/HomePage/HomePage";

function App() {
  return (
    <div className=" ">
      <div className="z-50">
        <Navigation></Navigation>
      </div>
      <div>
        <HomePage></HomePage>
      </div>
    </div>
  );
}

export default App;
