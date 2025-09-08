import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 px-6 md:px-16 lg:px-24">
     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
      
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Niaz Store</h2>
          <p className="text-gray-400 mb-4">
            Premium quality fashion for Men & Women. Designed to keep you stylish and confident.  
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-black transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-black transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-black transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-black transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="http://localhost:3000/mens-outerwear" className="hover:text-white transition">Men's Outerwear</Link></li>
            <li><Link to="http://localhost:3000/mens-outerwear" className="hover:text-white transition">Ladies Outerwear</Link></li>
            <li><Link to="http://localhost:3000/mens-t-shirts" className="hover:text-white transition">Men's T-Shirts</Link></li>
             <li><Link to="http://localhost:3000/ladies-t-shirts" className="hover:text-white transition">Ladies T-Shrits</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">FAQ</Link></li>
            <li><Link to="/" className="hover:text-white transition">Returns</Link></li>
            <li><Link to="/" className="hover:text-white transition">Shipping Info</Link></li>
            <li><Link to="/" className="hover:text-white transition">Support</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-3">Subscribe to our newsletter and never miss exclusive deals.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md outline-none text-black"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-4 rounded-r-md hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

   
      <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm py-6 gap-4">
        <span>© {new Date().getFullYear()} Niaz Store. All rights reserved.</span>
        <div className="flex gap-4 text-2xl">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
