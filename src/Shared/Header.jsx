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
      <div className="bg-[#785d26] text-white text-sm ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1 ">
          <div className="flex items-center gap-3">
            <span>3 Easy Steps</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center text-white space-x-0.5">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <span>Thousands of Happy Customers</span>
          </div>

          <div>Encrypted &amp; Secure</div>
        </div>
      </div>

      <header className="bg-white border-b border-amber-900/20 shadow-sm">
        <div className="max-w-9xl mx-16 px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="FlashbackAI logo"
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex gap-6 text-black font-medium">
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
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <Button onClick={() => navigate("/dashboard")}>Sign In</Button>
            ) : (
              <Button
                className=" hover:bg-amber-800 text-white rounded-full px-4 py-2 flex items-center gap-2"
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
