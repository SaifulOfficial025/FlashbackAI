import React from "react";
import { BsStarFill } from "react-icons/bs";
import Button from "../../Shared/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoShieldHalfSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-full mx-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Every Photo Has a Story.
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#785d26] leading-tight">
              We Bring It Back to Life.
            </h1>

            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-full w-fit border-2 border-gray-400">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Excellent
              </span>
              <div className="flex items-center text-amber-400 gap-1">
                <BsStarFill className="text-xs" />
                <BsStarFill className="text-xs" />
                <BsStarFill className="text-xs" />
                <BsStarFill className="text-xs" />
                <BsStarFill className="text-xs" />
              </div>
              <span className="text-sm font-semibold text-gray-800">4.7</span>
              <span className="text-sm text-gray-600">2,487 Happy Users</span>
            </div>
            <p className="text-xl text-black leading-relaxed">
              Transform your static memories into dynamic moments. With
              FlashbackAI, restore motion and spirit to cherished photographs,
              allowing them to be experienced in a whole new way.
            </p>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                className=" hover:bg-amber-800 text-white px-8 py-3 rounded-full"
                onClick={() => navigate("/flashback")}
              >
                <span className="inline-flex items-center justify-center bg-amber-900/20 rounded-full p-1 text-sm">
                  <FaArrowRightLong className="font-bold" />
                </span>
                <span>Try Now — Bring My Photo to Life</span>
              </Button>
            </div>
            <div className="flex items-center">
              <IoShieldHalfSharp className="inline-block mr-2 text-gray-600 w-5 h-5" />
              <p>100% Private — Encrypted, Secure & Always Yours.</p>
            </div>
          </div>

          <div className="flex justify-end">
            <img
              src="/Herosideimg.png"
              alt="Hero side image"
              className="w-full max-w-xl h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16 md:mt-24 border-t pt-12">
          <p className="text-center text-md font-bold text-[#785d26] mb-6 uppercase tracking-wider">
            As seen on
          </p>
          <div className="flex justify-center items-center">
            <img
              src="/newsbrand.png"
              alt="Featured in news and brands"
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#785d26] py-12 md:py-16 mt-12">
        <div className="max-w-full mx-12 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 flex items-center gap-4">
              <img
                src="/heroicon1.png"
                alt="Fast"
                className="w-16 h-16 flex-shrink-0"
              />
              <p className="text-lg font-semibold text-gray-900">
                Only 60 seconds to begin your memory journey
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 flex items-center gap-4">
              <img
                src="/heroicon2.png"
                alt="Love"
                className="w-16 h-16 flex-shrink-0"
              />
              <p className="text-lg font-semibold text-gray-900">
                Created with love for your most meaningful moments
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 flex items-center gap-4">
              <img
                src="/heroicon3.png"
                alt="Easy"
                className="w-16 h-16 flex-shrink-0"
              />
              <p className="text-lg font-semibold text-gray-900">
                Designed for everyone, no tech skills needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
