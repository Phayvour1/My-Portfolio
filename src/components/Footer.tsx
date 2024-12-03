

const Footer = () => {
  return (
    <footer className=" bg-gray-600 text-gray-400 py-6 text-center">
      <p className=" relative-content text-lg">
        © 2024 <span className="font-signika text-gray-600">Craneo</span>.
      </p>
      <p className=" relative-content text-sm mt-2">
        Designed and Developed by{" "}
        <a
          href="https://twitter.com/Falola_Favour"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 font-medium"
        >
          @Falola Favour
        </a>
      </p>
    </footer>
  );
};

export default Footer;
