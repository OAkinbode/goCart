import Image from "next/image";

const ComputerDetails = ({ computer }) => {
  console.log("computer: ", computer);

  return (
    <div>
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
              <div className="p-2 text-right text-lg text-teal-700 font-semibold">
                ${computer.price}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComputerDetails;
