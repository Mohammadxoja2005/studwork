import axios from "axios";
import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OrdersBody from "../components/OrdersBody";

const Orders = () => {
  const token = localStorage.getItem("accessToken");

  return (
    <>
      {token ? (
        <>
          <Navbar />
          <OrdersBody />
          <Footer />
        </>
      ) : (
        window.location.href = "#/Registration"
        // navigate('/Registration')
      )}
    </>
  );
};

export default Orders;
