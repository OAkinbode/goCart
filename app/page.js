"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import ComputerMarket from "../components/computer_market";

export default function Home() {
  const lg = {
    name: "lg gram",
    memory: "16 gb",
    storage: "500 gb",
    screensize: 16,
  };
  const macbook = {
    name: "macbook air",
    memory: "32 gb",
    storage: "512 gb",
    screensize: 13,
  };

  const hp = {
    name: "hp pavilion",
    memory: "8 gb",
    storage: "256 gb",
    screensize: 16,
  };

  const computerParts = [lg, macbook, hp];

  const [checkoutItems, setCheckoutItems] = useState([]);

  const getItems = async () => {
    const url = `https://numbersapi.p.rapidapi.com/3/5/date?fragment=true&json=true`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API,
        "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching items: ", error);
    }
  };

  return (
    <main className="min-h-screen bg-teal-100 w-full flex flex-col justify-center items-center">
      <Header />
      <div className="bg-gray-50 w-4/5 flex flex-col justify-center items-center p-y-2 min-h-screen">
        <h2>Welcome to the Computer Marketplace</h2>
        <button
          className="p-2 border m-2 rounded-md shadow-md bg-black text-gray-50"
          onClick={getItems}
        >
          {" "}
          Generate interesting data
        </button>
        <ComputerMarket computer={computerParts} />
      </div>
      <Footer />
    </main>
  );
}
