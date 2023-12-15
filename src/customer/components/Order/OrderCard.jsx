import { Adjust } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/account/order/${1}`)}
      className="p-5 shadow-md shadow-black hover:shadow-2xl "
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className=" flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top "
              src="https://electshop-codezeel.myshopify.com/cdn/shop/products/16_6e7ebd6c-a7ef-45e6-95ba-79c0c40d509b_996x.jpg?v=1656479436"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Iphone 15 promax</p>
              <p className="opacity-50 text-xs font-semibold">Memory:64GB</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>1080$</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <p>
              <Adjust
                className="color-green-700"
                sx={{ width: "15px", height: "15px" }}
              ></Adjust>
              <span>Delivered on Thursday</span>
            </p>
          )}
          <p>Your Item Has Been Delivered</p>

          {false && (
            <p>
              <span>Expected Delivery on Thursday</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
