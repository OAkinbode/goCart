"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CheckoutModal from "./checkout_modal";

const Header = () => {
  const [controlCheckout, setControlCheckout] = useState(false);

  const handleControlCheckoutModal = () => {
    setControlCheckout(true);
  };

  const onClose = () => {
    setControlCheckout(false);
  };
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 shadow-md w-full">
      <CheckoutModal isOpen={controlCheckout} onClose={onClose} />
      <div className="mr-4 ">
        <Image
          src="/profile.jpeg"
          alt="Profile Picture"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <nav className="space-x-2">
        <Link href="/">
          <span className="text-blue-500 text-lg hover:underline">Home</span>
        </Link>
        <Link href="/about">
          <span className="text-blue-500 text-lg hover:underline">About</span>
        </Link>
        <button
          onClick={handleControlCheckoutModal}
          className="p-2 rounded-sm shadow-md border border-gray-100 bg-teal-100 hover:bg-teal-300"
        >
          View Checkout
        </button>
      </nav>
    </header>
  );
};

export default Header;
