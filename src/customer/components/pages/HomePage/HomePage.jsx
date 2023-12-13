import { HomeCarousel } from "../../HomeCarousel/HomeCarousel";
import { HomeSectionCarousel } from "../../HomeSectionCarousel/HomeSectionCarousel";

export const HomePage = () => {
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel></HomeSectionCarousel>
        <HomeSectionCarousel></HomeSectionCarousel>
        <HomeSectionCarousel></HomeSectionCarousel>
      </div>
    </div>
  );
};
