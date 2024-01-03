import { useDispatch, useSelector } from "react-redux";
import { HomeCarousel } from "../../HomeCarousel/HomeCarousel";
import { HomeSectionCarousel } from "../../HomeSectionCarousel/HomeSectionCarousel";
import { useEffect } from "react";
import { BrandCarousel } from "../../BrandCarousel/BrandCarousel";
import { Footer } from "../../Footer/Footer";
import { useLocation } from "react-router-dom";

export const HomePage = () => {
  const params = useLocation();
  console.log(params);
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel
          sectionName={"Phone"}
          data={{
            category: "phone",
          }}
        ></HomeSectionCarousel>
        <HomeSectionCarousel
          sectionName={"Computer"}
          data={{
            category: "phone",
          }}
        ></HomeSectionCarousel>
        <HomeSectionCarousel
          sectionName="Smart Phone"
          data={{
            category: "phone",
          }}
        ></HomeSectionCarousel>
      </div>

      <div className="shadow-2xl opacity-80 border border-2">
        <BrandCarousel></BrandCarousel>
      </div>
      <Footer></Footer>
    </div>
  );
};
