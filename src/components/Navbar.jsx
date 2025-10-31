import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "../context/CartContext";

const Navbar = ({ location, getLocation, openDropdown, setopenDropdown }) => {
  const { cartItem } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setopenDropdown(!openDropdown);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-indigo-50 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo + Location */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <h2 className="font-extrabold text-2xl md:text-3xl">
              <span className="text-red-500">Z</span>aptro
            </h2>
          </Link>

          {/* Location */}
          <div className="relative hidden md:flex items-center space-x-2 cursor-pointer">
            <MapPin className="text-red-600" />
            <span className="font-semibold text-[16px]">
              {location ? (
                <div className="text-sm leading-tight">
                  <p>{location.city}</p>
                  <p>{location.suburb}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={toggleDropdown} className="text-red-600" />

            {openDropdown && (
              <div className="absolute top-10 left-0 w-[250px] p-5 bg-white shadow-lg border rounded-md z-50">
                <h1 className="text-lg font-semibold mb-4 flex justify-between items-center">
                  Change Location
                  <CgClose
                    onClick={toggleDropdown}
                    className="cursor-pointer text-gray-600"
                  />
                </h1>
                <button
                  onClick={getLocation}
                  className="bg-red-500 text-white text-[15px] px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Detect My Location
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 items-center text-lg font-medium">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `cursor-pointer hover:text-red-500 transition ${
                    isActive ? "border-b-4 border-red-500" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
          <li className="relative">
            <Link to="/card" className="relative">
              <MdAddShoppingCart className="text-2xl hover:text-red-500 transition" />
              {cartItem.length > 0 && (
                <span className="bg-red-500 text-white text-[10px] px-[5px] py-[2px] rounded-full absolute -top-2 -right-3">
                  {cartItem.length}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <SignedOut>
            <SignInButton>
              <button className="bg-red-500 text-white px-3 py-1 rounded-md text-[16px] hover:bg-red-600 transition">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-red-600">
            {menuOpen ? <CgClose /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col space-y-4 text-center text-lg font-medium">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-1 ${
                      isActive ? "text-red-500 font-semibold" : "text-gray-800"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/card" onClick={() => setMenuOpen(false)} className="flex justify-center items-center gap-2">
                <MdAddShoppingCart className="text-2xl text-red-600" />
                <span>Cart ({cartItem.length})</span>
              </Link>
            </li>
            <li>
              <SignedOut>
                <SignInButton>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex justify-center">
                  <UserButton />
                </div>
              </SignedIn>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
