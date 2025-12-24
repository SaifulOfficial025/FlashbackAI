import React from "react";
import { Button } from "./Button";
import AnnouncementBar from "../../Shared/AnnouncementBar";
import { Navigate, useNavigate } from "react-router-dom";

export const Step5_Login = ({ onNext }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full mx-auto text-center animate-in fade-in zoom-in-95 duration-500">
      <AnnouncementBar />
      <header className="px-6 md:px-12 py-6 flex items-center justify-center mb-10 border-b border-gray-100 bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-serif tracking-tight text-[#7c602e] font-bold">
          FlashbackAI
        </div>
      </header>
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 leading-tight font-medium mx-auto">
        Enter your email to start creating and <br /> viewing your memories.
      </h1>

      {/* Subheading */}
      <p className="text-gray-400 text-sm mb-10 font-medium tracking-tight">
        make sure its correct , so your moment reach safely
      </p>

      {/* Auth Form */}
      <div className="max-w-sm mx-auto space-y-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#7c602e]/20 outline-none transition-all placeholder:text-gray-300"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#7c602e]/20 outline-none transition-all placeholder:text-gray-300"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#7c602e]/20 outline-none transition-all placeholder:text-gray-300"
          />
        </div>

        <div onClick={() => navigate("/step-preview")}>
          <Button className="w-full py-3.5 rounded-xl text-white font-semibold text-base shadow-sm">
            Continue
          </Button>
        </div>

        {/* Divider */}
        {/* <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-100"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#fdfcfb] px-4 text-gray-400 font-bold tracking-widest">
              OR
            </span>
          </div>
        </div> */}

        {/* Google Button */}
        {/* <button className="w-full flex items-center justify-center gap-3 bg-[#eeeeee] hover:bg-[#e5e5e5] text-gray-700 py-3.5 rounded-xl font-semibold transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button> */}
      </div>
    </div>
  );
};
