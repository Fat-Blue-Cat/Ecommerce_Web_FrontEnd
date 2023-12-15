import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative py-10">
        <div className="col-span-2">
          {[1, 1, 1, 1, 1].map((item) => (
            <CartItem></CartItem>
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
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
              onClick={handleCheckOut}
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
  );
};

export default Cart;