"use client";
import { useState, useEffect } from "react";

const Checkout = () => {
  useEffect(() => {
    const details = localStorage.getItem("checkout");
    const checkoutObj = JSON.parse(details);
    console.log("checkout object: ", checkoutObj);
    // setComputer(detailsObj);
  }, []);

  return (
    <div className="min-h-screen">
      This is the checkout page: <div>Table for existing checkout</div>
    </div>
  );
};

export default Checkout;
