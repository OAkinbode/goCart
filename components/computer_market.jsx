import Image from "next/image";

import laptop_json from "@/data/laptops.json";

const ComputerMarket = ({ computer }) => {
  return (
    <div>
      {laptop_json &&
        laptop_json.map((comp, index) => (
          <div
            key={index}
            className="p-2 border border-gray-600 shadow-md my-2"
          >
            <div>
              <Image
                src={`/${
                  comp.name === "hp pavilion" ? "hp.avif" : "screen.webp"
                }`}
                alt="computer"
                width={200}
                height={200}
              />
            </div>
            <div>{comp.name}</div>
            <div>{comp.memory}</div>
            <div>{comp.storage}</div>
            <div>{comp.screensize} inches</div>
          </div>
        ))}
    </div>
  );
};

export default ComputerMarket;
