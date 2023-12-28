import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../customer/components/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import LoginForm from "../customer/Auth/LoginForm";
import RegisterForm from "../customer/Auth/RegisterForm";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation></Navigation>
      </div>
      <Routes>
        <Route path="/login" element={<HomePage></HomePage>}></Route>
        <Route path="/register" element={<HomePage></HomePage>}></Route>

        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/:levelOne/:LevelTwo/:LevelThree"
          element={<Product></Product>}
        ></Route>
        <Route
          path="/product/:productId"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/account/order" element={<Order></Order>}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails></OrderDetails>}
        ></Route>
      </Routes>

      {/* <Product></Product> */}
      {/* <ProductDetails></ProductDetails> */}
      {/* <Cart></Cart> */}
      {/* <Checkout></Checkout> */}
      {/* <Order></Order> */}
      {/* <OrderDetails></OrderDetails> */}
    </div>
  );
};

export default CustomerRouters;
