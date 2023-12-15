import {
  AddCircleOutlineOutlined,
  RemoveCircleOutline,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md ">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://electshop-codezeel.myshopify.com/cdn/shop/products/1_996x.jpg?v=1656480636"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">IPhone15 pro max</p>
          <p className="opacity-70">Memory:256GB, White</p>
          <p className="font-opacity--70 mt-2">Seller: MobilePhone</p>
          <div className="flex space-x-5 item-center text-gray-900 mt-6 pt-6">
            <p className="font-semibold">195$</p>
            <p className="opacity-50 line-through">211$</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>

        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineOutlined></RemoveCircleOutlineOutlined>
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">5</span>
            <IconButton sx={{ color: "RGB(145 85 253)" }}>
              <AddCircleOutlineOutlined></AddCircleOutlineOutlined>
            </IconButton>
          </div>

          <div>
            <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
