import axios from "axios";
import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OrdersBody from "../components/OrdersBody";
import { API_PATH } from "../tools/constants";
import { useNavigate, redirect} from "react-router-dom";

const Orders = () => {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  return (
    <>
      {token ? (
        <>
          <Navbar />
          <OrdersBody />
          <Footer />
        </>
      ) : (
        <a href="#/Registration">Пойти login страницу</a> 
      )}
    </>
  );
};

export default Orders;
