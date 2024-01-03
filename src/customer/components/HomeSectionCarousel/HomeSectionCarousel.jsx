import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../State/Products/Action";

const responsive = {
  0: { items: 1 },
  500: { items: 1.5 },
  720: { items: 2.5 },
  1024: { items: 4.5 },
};

export const HomeSectionCarousel = (props) => {
  const { product } = useSelector((store) => store);
  const listItems = product?.products?.content;

  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      category: props.data.category,
      color: "",
      memories: "",
      minPrice: 0,
      maxPrice: 100000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: "",
    };

    dispatch(findProducts(data));
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (listItems) {
      const updatedItems = listItems.map((item) => (
        <HomeSectionCard key={item.id} product={item}></HomeSectionCard>
      ));
      setItems(updatedItems);
    }
  }, [listItems]);

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
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {props.sectionName}
      </h2>
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
            top: "50%",
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
      {activeIndex !== items?.length - 5 && (
        <Button
          onClick={slideNext}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "50%",
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
