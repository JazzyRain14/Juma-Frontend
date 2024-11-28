import React, { useEffect, useRef, useState } from "react";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavBarDropdwn from "./NavBarDropdwn";
import { FaBars } from "react-icons/fa6";
const NavBar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const [navsubnav, setisnavSubNav] = useState(false);
  const dropNavSubNav = () => setisnavSubNav(!navsubnav);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setisScrolled(scrollPosition >= 160);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        className={`z-50 w-full fixed top-0 shadow-xl flex items-center transition-colors ease-in-out duration-300
                ${isScrolled ? "bg-[#140f0f]" : "bg-transparent"}`}
      >
        {/* Responsive Burger */}
        <div className="text-white mx-5 text-xl hover:text-projectRed-2 lg:hidden w-fit">
          <FaBars onClick={dropNavSubNav} />
        </div>

        <NavBarDropdwn navsubnav={navsubnav} dropNavSubNav={dropNavSubNav} />

        <div className="flex flex-1 justify-around h-20  items-center lg:static">
          {/* Links */}
          <div className=" max-sm:hidden sm:hidden lg:flex">
            <Link
              to="home"
              className="text-white px-4 py-3 mx-2 rounded-lg hover:bg-projectRed-2 transition-colors duration-500 text-lg font-semibold"
            >
              Home
            </Link>
            <Link
              to="/signin"
              className="text-white px-4 py-3 mx-2 rounded-lg hover:bg-projectRed-2 transition-colors duration-500 text-lg font-semibold"
            >
              Pages
            </Link>
            <Link
              to="/signin"
              className="text-white   px-4 py-3 mx-2 rounded-lg hover:bg-projectRed-2 transition-colors duration-500 text-lg font-semibold"
            >
              About Us
            </Link>
            <Link
              to="/signin"
              className="text-white px-4 py-3 mx-2 rounded-lg hover:bg-projectRed-2 transition-colors duration-500 text-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <span className=" text-3xl text-white">
                <i>
                  <FaCartArrowDown />
                </i>
              </span>
              <span
                className="text-4xl ml-1 font-extrabold text-projectRed-2"
                style={{
                  WebkitTextStroke: ".65px #FFFFFF",
                }}
              >
                Juma
              </span>
            </div>
          </div>

          {/* search bar together with login btns*/}
          <div className="flex">
            <div className="max-w-[250px] rounded-[15px] bg-white overflow-hidden flex gap-2 max-lg:mr-4 max-sm:hidden max-xl:w-[200px]">
              <input
                type="text"
                className="w-full p-1 bg-transparent outline-none ml-2 font-normal"
              />
              <button className=" mr-2">
                <FaSearch />
              </button>
            </div>
            <div className="flex">
              <NavLink
                to={"/signin"}
                className=" bg-white text-projectRed-2 font-semibold hover:bg-projectRed-2 hover:text-white duration-300 py-2 rounded-lg mx-2 sm:px-4 max-sm:px-2"
              >
                Sign in
              </NavLink>
              <NavLink
                to={"/signup"}
                className=" bg-projectRed-2 text-white font-semibold hover:bg-white hover:text-projectRed-2 duration-300 py-2 rounded-lg mx-2 sm:px-4 max-sm:px-2"
              >
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
