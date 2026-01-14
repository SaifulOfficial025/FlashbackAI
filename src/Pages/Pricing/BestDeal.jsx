import React from "react";
import { Link } from "react-router-dom";

export default function BestDeal() {
  return (
    <div
      className="min-h-screen bg-cover bg-center font-sans"
      style={{ backgroundImage: "url('/bestdeal.png')" }}
    >
      <div className="max-w-3xl mx-auto text-center pt-24 pb-32 px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6 mt-20">
          Unlock the Best Deal: 200 Credit
          <br />
          for only A$179.90!
        </h1>
        <p className="text-white/90 text-lg font-medium mb-6">
          Upgrade your experience with our best-value coin bundle.
        </p>
        <p className="text-white/80 text-sm max-w-2xl mx-auto mb-8">
          Get 200 Credit for just A$179.90 - that's 60% more value compared to
          the smaller pack. Whether you're diving deep or coming back for more,
          this is the smartest way to power up.
        </p>

        {/* Card */}
        <div className="mt-6 bg-white rounded-2xl max-w-xl mx-auto p-6 shadow-lg">
          <div className="flex justify-center -mt-8">
            <div className="bg-yellow-300 text-xs text-[#774d00] font-bold px-3 py-1 rounded-full">
              Last Chance
            </div>
          </div>

          <div className="text-center mt-3">
            <div className="text-sm text-gray-500 line-through">A$60</div>
            <div className="text-2xl font-bold text-gray-900">
              A$120{" "}
              <span className="text-sm text-red-500 font-semibold">
                50% OFF
              </span>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm mt-4 mb-6">
            Elevate your experience - get more Credit and do more with every
            moment.
          </p>

          <div className="flex flex-col items-center gap-3">
            <button className="bg-[#7c602e] text-white px-10 py-3 rounded-full font-semibold shadow hover:bg-[#6b5127] transition-colors">
              Upgrade & Save Big00
            </button>
            <Link to="/dashboard">
              <button className="text-sm text-gray-700 underline">
                No, thank you
              </button>
            </Link>
          </div>
        </div>

        {/* Payment icons */}
        <div className="max-w-xl mx-auto bg-white rounded-full mt-8 py-4 flex items-center justify-center gap-6 shadow">
          {/* <img src="/master.png" alt="master" className="h-6" />
          <img src="/visa.png" alt="visa" className="h-6" />
          <img src="/amex.png" alt="amex" className="h-6" /> */}
          <img src="/payments.png" alt="" />
          {/* <span className="text-sm text-gray-600">Pay</span> */}
        </div>
      </div>
    </div>
  );
}
