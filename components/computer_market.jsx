"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

import laptop_json from "@/data/laptops.json";

const ComputerMarket = ({ computer }) => {
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [activeProduct, setActiveProduct] = useState(-1);
  const router = useRouter();

  const handleBuyClick = (index) => {
    setShowProductDetails(true);
    setActiveProduct(index);
  };

  const handleDetailsClick = (comp) => {
    localStorage.setItem("computerDetails", JSON.stringify(comp));
  };

  return (
    <div className="w-full">
      {laptop_json &&
        laptop_json.map((comp, index) => (
          <div key={index} className=" flex flex-col">
            <div className="p-2 border border-gray-600 shadow-md my-2 ml-2  w-full rounded-md bg-white flex">
              <div className="w-1/3 flex items-center justify-center">
                <Image
                  src={`/${
                    comp.name === "hp pavilion" ? "hp.avif" : "screen.webp"
                  }`}
                  alt="computer"
                  width={200}
                  height={200}
                />
              </div>
              <div className="bg-[#e7f3f3] flex-grow rounded-md shadow-md p-2">
                <div className="text-lg text-[#008080]">{comp.name}</div>
                <div>{comp.memory}</div>
                <div>{comp.storage}</div>
                <div>{comp.screensize} inches</div>
              </div>
              <div className="w-1/6 flex flex-col">
                <button
                  className="p-1 m-2 border border-gray-500 rounded-md shadow-md bg-[#008080] text-gray-50 hover:bg-green-700"
                  onClick={() => {
                    handleBuyClick(index);
                  }}
                >
                  Buy
                </button>
                <Link
                  href={`/product?computerName=${comp.name}&computerScreen=${comp.screensize}`}
                  className="p-1 m-2 border border-gray-500 rounded-md shadow-md bg-[#008080] text-gray-50 hover:bg-green-700 text-center"
                  onClick={() => handleDetailsClick(comp)}
                >
                  Details
                </Link>

                <button className="p-1 m-2 border border-[#008080] rounded-md shadow-md bg-[#b2d8d8] text-gray-50 hover:bg-green-700">
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
        ))}
    </div>
  );
};

export default ComputerMarket;
