import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Logo from "../../assets/Logo.png";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Service", link: "/" },
    { name: "Portfolio", link: "/" },
    { name: "Price", link: "/" },
    { name: "Blog", link: "/" },
  ];

  return (
    <div
      className={`w-full fixed top-0 left-0 transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-white shadow-md xl:shadow-none xl:bg-transparent py-6"
      }`}
    >
      <header className="xl:flex justify-between items-center container px-5 lg:px-0 mx-auto top-0 left-0 text-black relative">
        <div className="flex items-center justify-between">
          <a href="">
            <img
              src={Logo}
              alt="Logo"
              className="w-20 xl:w-32 hover:scale-105 transition-all"
            />
          </a>
          <div
            className="lg:hidden cursor-pointer text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross2 /> : <FaBarsStaggered />}
          </div>
        </div>
        <ul
          className={`xl:flex items-center gap-12 font-semibold text-xl bg-white lg:bg-transparent pb-12 md:pb-0 font-open absolute xl:static lg:z-auto z-[-1] left-0 w-full xl:w-auto lg:pb-0 lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((item) => (
            <li
              key={item.name}
              className="lg:flex gap-2 hover:text-btnColor hover:scale-105 cursor-pointer items-center py-4 lg:py-0 text-center"
            >
              {item.name} <FaAngleDown className="hidden xl:block" />
            </li>
          ))}
          <li className="lg:hidden font-semibold text-xl font-open py-4 text-center">
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <div className="relative hidden xl:flex items-center justify-center gap-3">
          <PrimaryBtn>Contact Us</PrimaryBtn>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
