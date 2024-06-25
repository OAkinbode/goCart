"use Client";
import { useState, useEffect } from "react";

const CheckoutModal = ({ isOpen, onClose, data }) => {
  console.log("data: ", data);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex pt-20 items-start justify-end bg-black bg-opacity-10">
      <div className="bg-gray-50 p-8 rounded-md shadow-md w-1/2 max-w-[600px]">
        <h2 className="text-2xl mb-4">Checkout Products</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Picture
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 w-full">
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <tr key={item.title}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {/* {item.title} */}1
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-wrap break-words max-w-xs">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.price}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <button onClick={onClose} className="text-red-600 text-2xl p-2">
        x
      </button>
    </div>
  );
};

export default CheckoutModal;
