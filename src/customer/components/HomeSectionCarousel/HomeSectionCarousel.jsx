import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { mens_kurta } from "./menkuta";

const responsive = {
  0: { items: 1 },
  720: { items: 2.5 },
  1024: { items: 5.5 },
};

export const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [1, 1, 1, 1, 11, 1, 1, 1].map((item) => (
    <HomeSectionCard key={item.id} product={item}></HomeSectionCard>
  ));
  const [items] = useState(data);

  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
    console.log(activeIndex);
  };
  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const onSlideChanged = ({ item }) => {
    setActiveIndex(item);
  };

  return (
    <div className="relative border px-4 lg:px-8 ">
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={onSlideChanged}
        ></AliceCarousel>
      </div>
      {activeIndex !== 0 && (
        <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "-2rem",
            transform: "rotate(90deg)",
            bgcolor: "white",
            border: 1,
          }}
          arial-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          ></KeyboardArrowLeftIcon>
        </Button>
      )}
      {activeIndex !== items.length - 5 && (
        <Button
          onClick={slideNext}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
            border: 1,
          }}
          arial-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          ></KeyboardArrowLeftIcon>
        </Button>
      )}
    </div>
  );
};
