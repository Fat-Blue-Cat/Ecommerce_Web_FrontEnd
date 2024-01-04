import { useDispatch, useSelector } from "react-redux";
import { HomeCarousel } from "../../HomeCarousel/HomeCarousel";
import { HomeSectionCarousel } from "../../HomeSectionCarousel/HomeSectionCarousel";
import { useEffect, useState } from "react";
import { BrandCarousel } from "../../BrandCarousel/BrandCarousel";
import { Footer } from "../../Footer/Footer";
import { useLocation } from "react-router-dom";
import AuthModal from "../../../Auth/AuthModal";
import { findProducts } from "../../../../State/Products/Action";
import { api } from "../../../../config/apiConfig";

export const HomePage = () => {
  const data1 = {
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
  const [category1, setcategory1] = useState([]);
  const [category2, setcategory2] = useState([]);
  const getData = (category, categoryData) => {
    const { data } = api
      .get(
        `/api/products?color=${data1.color}&memories=${data1.memories}&minPrice=${data1.minPrice}&maxPrice=${data1.maxPrice}&minDiscount=${data1.minDiscount}&category=${category}&stock=${data1.stock}&sort=${data1.sort}&pageNumber=${data1.pageNumber}&pageSize=${data1.pageSize}                
    `
      )
      .then(function (response) {
        categoryData(response.data);
      });
  };

  console.log(category1);
  console.log(category2);

  useEffect(() => {
    getData("phone", setcategory1);
    getData("laptop", setcategory2);
  }, []);

  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel
          data={category1}
          item={{ name: "Smart Phone" }}
        ></HomeSectionCarousel>
        <HomeSectionCarousel
          data={category2}
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
