import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Star, StarBorder, Start } from "@mui/icons-material";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-lg py-10">Delivery Address</h1>
        <AddressCard></AddressCard>
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3}></OrderTracker>
      </div>

      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border "
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://electshop-codezeel.myshopify.com/cdn/shop/products/1_996x.jpg?v=1656480636"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Iphone 12 ProMax</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: Black</span>
                    <span>Memory: 64GB</span>
                  </p>
                  <p>Seller: Mobile Store</p>
                  <p>$1080</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorder
                  className="px-2 text-5xl"
                  sx={{ fontSize: "2rem" }}
                ></StarBorder>
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
