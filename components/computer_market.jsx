"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

import laptop_json from "@/data/laptops.json";

const ComputerMarket = ({ computer }) => {
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [activeProduct, setActiveProduct] = useState(-1);
  const [dummyData, setDummyData] = useState(null);
  const [electronics, setElectronics] = useState(null);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const router = useRouter();

  useState(() => {
    if (!dummyData) {
      getDummyData();
    }
  }, []);

  useState(() => {
    if (dummyData) {
      let electronicsData = dummyData.filter(
        (item) => item.category === "electronics"
      );
      setElectronics(electronicsData);
    }
  }, [dummyData]);

  const handleBuyClick = (index) => {
    setShowProductDetails(true);
    setActiveProduct(index);
  };

  const handleDetailsClick = (comp) => {
    // const payload = { electronics: electronics };
    localStorage.setItem("electronics", JSON.stringify(comp));
  };

  const handleAddToCheckout = (index) => {
    const newItem = electronics[index];
    console.log("newItem", newItem);
    setCheckoutItems([...checkoutItems, newItem]);
    // setCheckoutItems([...checkoutItems, newItem]);
    // const existing = localStorage.getItem("checkout");
    // const fullData = JSON.stringify([...existing, newItem]);
    // console.log("item: ", newItem);
    // localStorage.setItem("checkout", fullData);
  };

  const sortProducts = (products) => {
    const newProducts = [...products];
    return newProducts.sort((a, b) => a.title.localeCompare(b.title));
  };

  const sortProductsByPrice = (products) => {
    const newProducts = [...products];
    return newProducts.sort((a, b) => a.price - b.price);
  };

  async function getDummyData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setDummyData(json);
        const electronicsData = json.filter(
          (item) => item.category === "electronics"
        );
        const sortedElectronicsData = sortProducts(electronicsData);
        // console.log("sorted data: ", electronicsData);
        setElectronics(sortedElectronicsData);
      });
  }

  return (
    <div className="w-full bg-teal-100">
      {!electronics ? (
        <div>loading</div>
      ) : (
        electronics.map((comp, index) => (
          <div key={index} className=" flex flex-col">
            <div className="p-2 border border-gray-600 shadow-md my-2 ml-2  w-full rounded-md bg-white flex">
              <div className="w-1/3 min-w-1/3 flex items-center justify-center">
                <Image
                  src={comp.image}
                  alt="computer"
                  width={200}
                  height={200}
                />
              </div>
              <div className="bg-[#e7f3f3] flex-grow rounded-md shadow-md p-2 max-w-1/2 w-1/2">
                <div className="text-lg text-[#008080]">{comp.title}</div>
                <div className="my-2">
                  <span className="text-teal-700">Category:</span>{" "}
                  {comp.category}
                </div>
                <div className="text-right text-lg text-gray-600">
                  $ {comp.price}
                </div>
              </div>
              <div className="w-1/6 max-w-1/6 flex flex-col">
                <button
                  className="p-1 m-2 border border-gray-500 rounded-md shadow-md bg-[#008080] text-gray-50 hover:bg-green-700"
                  onClick={() => {
                    handleBuyClick(index);
                  }}
                >
                  Buy
                </button>
                <Link
                  href="/product"
                  className="p-1 m-2 border border-gray-500 rounded-md shadow-md bg-[#008080] text-gray-50 hover:bg-green-700 text-center"
                  onClick={() => handleDetailsClick(comp)}
                >
                  Details
                </Link>

                <button
                  className="p-1 m-2 border border-[#008080] rounded-md shadow-md bg-teal-600 text-gray-50 hover:bg-green-700 text-center"
                  onClick={() => handleAddToCheckout(index)}
                >
                  Checkout
                </button>
              </div>
            </div>

            {showProductDetails && index === activeProduct && (
              <div className="bg-teal-50 rounded-md shadow-md p-2 mx-2">
                <div className="text-lg text-teal-800">
                  Price: <span className="text-gray-600 italic">$2500</span>{" "}
                </div>
              </div>
            )}
            {/* {showProductDetails && index === activeProduct ? (
              <div className="bg-blue-100 rounded-md shadow-md p-2">
                Thank you for selecting this product.
              </div>
            ) : (
              <div className="bg-red-200 rounded-md shadow-md p-2">
                This laptop has not been selected
              </div>
            )} */}
          </div>
        ))
      )}
    </div>
  );
};

export default ComputerMarket;
