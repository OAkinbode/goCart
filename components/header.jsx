import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 shadow-md w-full">
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
      </nav>
    </header>
  );
};

export default Header;
