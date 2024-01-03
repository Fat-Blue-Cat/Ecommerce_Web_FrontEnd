import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCarouselData";

const items = homeCarouselData.map((item, index) => (
  <div className="relative inline-block">
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 z-10"></div>
    <img className="z-20" role="presentation" src={item.image} alt="" />
  </div>
));

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};
export const HomeCarousel = () => (
  <AliceCarousel
    mouseTracking
    touchTracking
    items={items}
    disableButtonsControls
    time
    autoPlay
    responsive={responsive}
    autoPlayInterval={1000}
    infinite
  />
);
