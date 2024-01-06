import { useDispatch, useSelector } from "react-redux";
import { HomeCarousel } from "../../HomeCarousel/HomeCarousel";
import { HomeSectionCarousel } from "../../HomeSectionCarousel/HomeSectionCarousel";
import { useEffect, useState } from "react";
import { BrandCarousel } from "../../BrandCarousel/BrandCarousel";
import { Footer } from "../../Footer/Footer";
import { useLocation } from "react-router-dom";
import AuthModal from "../../../Auth/AuthModal";
import {
  findProductByCategory,
  findProducts,
} from "../../../../State/Products/Action";
import { api } from "../../../../config/apiConfig";

export const changeCategory = (newCategory) => {
  const data = {
    category: "phone",
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
  data.category = newCategory;
  return data;
};

export const HomePage = () => {
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);
  console.log(product);
  if (location.pathname === "/about") {
    window.scrollTo(0, document.body.scrollHeight);
  }
  useEffect(() => {
    dispatch(findProductByCategory(changeCategory("phone")));
    dispatch(findProductByCategory(changeCategory("laptop")));
  }, []);

  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel
          data={product?.phone}
          item={{ name: "Smart Phone" }}
        ></HomeSectionCarousel>
        <HomeSectionCarousel
          data={product?.laptop}
          item={{ name: "Laptop" }}
        ></HomeSectionCarousel>
      </div>

      <div className="shadow-2xl opacity-80 border border-2">
        <BrandCarousel></BrandCarousel>
      </div>
      <Footer></Footer>
    </div>
  );
};
