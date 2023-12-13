import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCarouselData";

const items = homeCarouselData.map((item) => (
  <img
    className="cusor-point"
    role="presentation"
    src={item.image}
    alt=""
  ></img>
));

export const HomeCarousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    disableButtonsControls
    time
    autoPlay
    autoPlayInterval={1000}
    infinite
  />
);
