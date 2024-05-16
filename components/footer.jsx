const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-4 bg-gray-200 shadow-inner w-full">
      <p className="text-gray-600">© 2024 Your Company</p>
      <nav>
        <a href="/terms" className="text-blue-500 text-lg hover:underline mr-4">
          Terms
        </a>
        <a href="/privacy" className="text-blue-500 text-lg hover:underline">
          Privacy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
