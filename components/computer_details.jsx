import Image from "next/image";
import { useState } from "react";
import CreditCardModal from "./get_creditcard_details";

const ComputerDetails = ({ computer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBuyClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const onSubmitModal = (data) => {
    console.log("Data: ", data);
  };

  return (
    <div>
      <CreditCardModal
        isOpen={isOpen}
        onClose={closeModal}
        onSubmit={onSubmitModal}
      />
      <div className="p-2 border border-gray-600 rounded-md m-2">
        {computer && (
          <div className=" flex">
            <div className="w-1/2">
              <Image
                src={computer.image}
                alt="computer"
                width={600}
                height={600}
              />
            </div>
            <div className="flex flex-col w-1/2 justify-between">
              <div className="p-2 text-sm">
                <div className="bg-teal-700 text-gray-100 p-2 text-lg">
                  Product description
                </div>
                <div className="p-2">{computer.description}.</div>
              </div>
              <div className="p-2 text-right text-lg text-teal-700 font-semibold flex items-center justify-between">
                <div>
                  <button
                    onClick={() => {
                      handleBuyClick();
                    }}
                    className="border border-gray-700 bg-teal-700 shadow-md rounded-md hover:bg-green-800 text-gray-50 p-2"
                  >
                    Button
                  </button>
                </div>
                <div> ${computer.price}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComputerDetails;
