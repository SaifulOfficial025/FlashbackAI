import React from "react";
import Button from "../../Shared/Button";
import { FaArrowRightLong } from "react-icons/fa6";

function Steps() {
  return (
    <div className="w-full flex flex-col items-center py-12 bg-[#faf9f5 mb-16">
      <div className="w-full flex flex-col items-center mb-8">
        <span className="uppercase tracking-widest text-md font-bold text-[#7A693B] mb-2">
          Simple Process — Everyone Can Do It
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Create Your Memory Video in 3 Easy Steps
        </h2>
        <p className="text-black text-sm font-bold md:text-base text-center max-w-xl">
          Create a beautiful memory video from a single photo — no skills
          needed.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center mb-10">
        {/* Step 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 w-[480px] h-[720px] flex flex-col items-center border border-gray-100">
          <div className="mb-6 -mt-10">
            <span className="bg-[#7A693B] text-white text-xs font-semibold px-4 py-1 rounded-full ">
              STEP 1
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">
            Upload Your Photo
          </h3>
          <p className="text-gray-600 text-md mb-4 text-center">
            Simply upload any photo. We support all major image formats — old
            scans, portraits, family pictures, anything meaningful to you.
          </p>
          <img
            src="/step1.png"
            alt="Upload Your Photo"
            className="rounded-xl mb-4 w-full h-[500px] object-cover"
          />
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-md text-gray-700">
              Secure Upload — your photo stays private
            </span>
          </div>
        </div>
        {/* Step 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 w-[480px] h-[720px] flex flex-col items-center border border-gray-100 mt-16">
          <div className="mb-6 -mt-10">
            <span className="bg-[#7A693B] text-white text-xs font-semibold px-4 py-1 rounded-full ">
              STEP 2
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">
            Select Your Animation Style
          </h3>
          <p className="text-gray-600 text-md mb-4 text-center">
            Choose the motion style that fits your memory best — gentle
            movement, cinematic storytelling, or natural lifelike motion.
          </p>
          <img
            src="/step2.png"
            alt="Select Your Animation Style"
            className="rounded-xl mb-4 w-full h-[500px] object-cover"
          />
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-md text-gray-700">
              AI-guided animation styles — no guesswork
            </span>
          </div>
        </div>
        {/* Step 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 w-[480px] h-[720px] flex flex-col items-center border border-gray-100 mt-32">
          <div className="mb-6 -mt-10">
            <span className="bg-[#7A693B] text-white text-xs font-semibold px-4 py-1 rounded-full">
              STEP 3
            </span>
          </div>
          <h3 className="text-lg font-bold mb-2 text-center">
            Select Your Animation Style
          </h3>
          <p className="text-gray-600 text-sm mb-4 text-center">
            Choose the motion style that fits your memory best — gentle
            movement, cinematic storytelling, or natural lifelike motion.
          </p>
          <img
            src="/step3.png"
            alt="Select Animation Style"
            className="rounded-xl mb-4 w-full h-[540px] object-cover"
          />
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-xs text-gray-700">
              HD download included — yours forever
            </span>
          </div>
        </div>
      </div>
      <Button className="bg-[#7A693B] hover:bg-[#5c522e] text-white px-8 py-3 rounded-full text-base font-semibold flex items-center gap-2 shadow-md">
        <span className="flex items-center gap-6">
          <FaArrowRightLong /> Try Now — Bring My Photo to Life
        </span>
      </Button>
    </div>
  );
}

export default Steps;
