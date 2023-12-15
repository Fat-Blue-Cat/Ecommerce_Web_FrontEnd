import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Cart from "../Cart/Cart";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-sm border">
        <AddressCard></AddressCard>
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {[1, 1, 1, 1, 1].map((item) => (
              <CartItem></CartItem>
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10 mx-5">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>1200$</span>
                </div>

                <div className=" flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">120$</span>
                </div>

                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <hr />
                <div className="flex justify-between pt-3 text-black">
                  <span>Total amount</span>
                  <span className="text-green-600">1080$</span>
                </div>
              </div>

              <Button
                variant="contained"
                className="w-full mt-5"
                sx={{ px: "2rem", py: ".7rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;