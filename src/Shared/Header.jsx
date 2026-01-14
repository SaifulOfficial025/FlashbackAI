import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import AuthModal from "../Pages/Authentication/AuthModal";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = true;
  return (
    <>
      {/* Top Bar Responsive */}
      <div className="bg-[#785d26] text-white text-sm ">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 py-1 gap-1 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <span>3 Easy Steps</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-center mt-1 sm:mt-0">
            <div className="flex items-center text-white space-x-0.5">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <span className="hidden xs:inline">
              Thousands of Happy Customers
            </span>
            <span className="inline xs:hidden text-xs">Happy Customers</span>
          </div>

          <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-1 sm:mt-0">
            <span className="hidden xs:inline">Encrypted &amp; Secure</span>
            <span className="inline xs:hidden text-xs">Secure</span>
          </div>
        </div>
      </div>

      {/* Main Header Responsive */}
      <header className="bg-white border-b border-amber-900/20 shadow-sm">
        <div className="max-w-9xl mx-2 sm:mx-8 md:mx-16 px-2 sm:px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto justify-center sm:justify-start">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="/logo.png"
                alt="FlashbackAI logo"
                className="h-7 sm:h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex gap-4 sm:gap-6 text-black font-medium">
              <a href="#features" className="hover:text-gray-900">
                Features
              </a>
              <a href="#how" className="hover:text-gray-900">
                How It Works
              </a>
              <a href="#faq" className="hover:text-gray-900">
                FAQ
              </a>
            </nav>
          </div>
          {/* Mobile Nav */}
          <nav className="flex md:hidden w-full justify-center mt-2">
            <a
              href="#features"
              className="mx-2 text-black font-medium text-sm hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#how"
              className="mx-2 text-black font-medium text-sm hover:text-gray-900"
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="mx-2 text-black font-medium text-sm hover:text-gray-900"
            >
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-end mt-2 sm:mt-0">
            {isAuthenticated ? (
              <Button
                className="w-full sm:w-auto"
                onClick={() => navigate("/dashboard")}
              >
                Sign In
              </Button>
            ) : (
              <Button
                className="w-full sm:w-auto hover:bg-amber-800 text-white rounded-full px-4 py-2 flex items-center gap-2"
                onClick={() => setIsAuthOpen(true)}
              >
                <span className="inline-flex items-center justify-center bg-amber-900/20 rounded-full p-1 text-sm">
                  <FaArrowRightLong />
                </span>
                <span>Sign In</span>
              </Button>
            )}
          </div>
        </div>
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      </header>
    </>
  );
}

export default Header;
