import React from "react";
import { BsStarFill } from "react-icons/bs";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#785d26] text-white text-sm ">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-1 ">
        <div className="flex items-center ">
          <span>3 Easy Steps</span>
        </div>

        <div className="flex items-center ">
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
  );
}
