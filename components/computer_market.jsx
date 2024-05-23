import Image from "next/image";

import laptop_json from "@/data/laptops.json";

const ComputerMarket = ({ computer }) => {
  return (
    <div className="w-full">
      {laptop_json &&
        laptop_json.map((comp, index) => (
          <div
            key={index}
            className="p-2 border border-gray-600 shadow-md my-2 ml-2  w-full rounded-md bg-white flex"
          >
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
              <button className="p-1 m-2 border border-gray-500 rounded-md shadow-md bg-[#008080] text-gray-50 hover:bg-green-700">
                Buy
              </button>
              <button className="p-1 m-2 border border-[#008080] rounded-md shadow-md bg-[#b2d8d8] text-gray-50 hover:bg-green-700">
                Checkout
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ComputerMarket;
