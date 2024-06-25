"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
// import ComputerDetails from "@/components/computer_details";
import ComputerDetails from "../../components/computer_details";

const Product = () => {
  // const paramsObj = useSearchParams();
  // const param = paramsObj.get("computerScreen");

  const [name, setName] = useState("");
  const [computer, setComputer] = useState(null);

  useEffect(() => {
    const details = localStorage.getItem("electronics");
    const detailsObj = JSON.parse(details);
    setComputer(detailsObj);
  }, []);

  // useEffect(() => {
  //   console.log("This is the name: ", computer);
  // }, [computer]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted: ", name);
  };

  return (
    <div className="min-h-screen">
      This is the product page:{" "}
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter the product name"
            value={name}
            onChange={handleChange}
          />
          <button>Click on me</button>
        </form>
      </div>
      <ComputerDetails computer={computer} />
    </div>
  );
};

export default Product;
