import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../CartContext/CartContext";

const Header = () => {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const totalQuantity = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
     
      <div className="flex items-center justify-between px-6 py-4">
      
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-gray-800 hover:text-black transition">
          SHOP
        </Link>

       
        <nav className="hidden sm:flex gap-8 font-medium text-gray-700">
          <NavLink
            to="/mens-outerwear"
            className={({ isActive }) =>
              `hover:text-black transition ${isActive ? "border-b-2 border-black" : ""}`
            }
          >
            Men's Outerwear
          </NavLink>
          <NavLink
            to="/ladies-outerwear"
            className={({ isActive }) =>
              `hover:text-black transition ${isActive ? "border-b-2 border-black" : ""}`
            }
          >
            Ladies Outerwear
          </NavLink>
          <NavLink
            to="/mens-t-shirts"
            className={({ isActive }) =>
              `hover:text-black transition ${isActive ? "border-b-2 border-black" : ""}`
            }
          >
            Men's T-Shirts
          </NavLink>
          <NavLink
            to="/ladies-t-shirts"
            className={({ isActive }) =>
              `hover:text-black transition ${isActive ? "border-b-2 border-black" : ""}`
            }
          >
            Ladies T-Shirts
          </NavLink>
        </nav>

     
        <Link to="/cart" className="relative text-2xl text-gray-700 hover:text-black transition">
          <FaShoppingCart />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs font-semibold rounded-full px-2 py-[2px]">
              {totalQuantity}
            </span>
          )}
        </Link>

       
        <button
          className="sm:hidden text-2xl text-gray-700 hover:text-black transition"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

     
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <nav className="flex flex-col items-start p-4 gap-4 font-medium text-gray-700">
            <NavLink
              to="/mens-outerwear"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `hover:text-black transition ${isActive ? "font-bold" : ""}`
              }
            >
              Men's Outerwear
            </NavLink>
            <NavLink
              to="/ladies-outerwear"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `hover:text-black transition ${isActive ? "font-bold" : ""}`
              }
            >
              Ladies Outerwear
            </NavLink>
            <NavLink
              to="/mens-t-shirts"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `hover:text-black transition ${isActive ? "font-bold" : ""}`
              }
            >
              Men's T-Shirts
            </NavLink>
            <NavLink
              to="/ladies-t-shirts"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `hover:text-black transition ${isActive ? "font-bold" : ""}`
              }
            >
              Ladies T-Shirts
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
