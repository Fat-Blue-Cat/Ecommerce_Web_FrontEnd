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
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setItems] = useState([]);

  console.log(props?.data);
  useEffect(() => {
    const updatedItems = props?.data?.content?.map((item) => (
      <HomeSectionCard key={item.id} product={item}></HomeSectionCard>
    ));
    setItems(updatedItems);
    console.log(items);
  }, [props]);

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
        {props?.item?.name}
      </h2>
      <div className="relative p-5">
        {props?.data?.content?.length > 0 ? (
          <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            items={items}
            activeIndex={activeIndex}
            responsive={responsive}
            onSlideChanged={onSlideChanged}
          ></AliceCarousel>
        ) : (
          <div role="status" className="flex justify-center">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        )}
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
