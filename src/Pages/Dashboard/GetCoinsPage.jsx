import React, { useState } from "react";
import { CheckCircle2, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import coins from "../../../public/coins.png";

const packages = [
  {
    id: "max",
    name: "Max Pack",
    credits: "80 credit",
    price: "$2.49",
    subtitle: "per moment",
    badge: "BEST VALUE",
    badgeColor: "bg-[#ff4d4d]",
    borderColor: "border-[#ffcccc]",
  },
  {
    id: "power",
    name: "Power pack",
    credits: "40 credits",
    price: "$2.49",
    subtitle: "per moment",
    badge: "MOST POPULAR",
    badgeColor: "bg-[#ffd700]",
    borderColor: "border-gray-200",
  },
  {
    id: "value",
    name: "Value pack",
    credits: "20 credits",
    price: "$2.49",
    subtitle: "per moment",
    borderColor: "border-gray-200",
  },
  {
    id: "boost",
    name: "Boost pack",
    credits: "10 credits",
    price: "$2.49",
    subtitle: "per moment",
    borderColor: "border-gray-200",
  },
];

export const GetCoinsPage = () => {
  const [selected, setSelected] = useState("max");
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-[#fdfcfb] py-12 px-6 flex flex-col items-center animate-in fade-in duration-500">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12">
        Choose Your package
      </h1>

      {/* Package Selection List */}
      <div className="w-full max-w-[640px] space-y-4 mb-10">
        {packages.map((pkg) => (
          <div key={pkg.id} className="relative group">
            {/* Top Badge */}
            {pkg.badge && (
              <div
                className={`absolute -top-3 right-4 z-10 ${pkg.badgeColor} text-white text-[10px] font-black px-3 py-1 rounded-md shadow-sm`}
              >
                {pkg.badge}
              </div>
            )}

            {/* Package Card */}
            <label
              className={`flex items-center justify-between p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all bg-white hover:shadow-md ${
                selected === pkg.id
                  ? "border-[#7c602e] ring-1 ring-[#7c602e]/10"
                  : pkg.borderColor
              }`}
            >
              <input
                type="radio"
                name="coin-package"
                className="hidden"
                checked={selected === pkg.id}
                onChange={() => setSelected(pkg.id)}
              />

              {/* Left: Radio UI & Name */}
              <div className="flex items-center gap-5">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selected === pkg.id
                      ? "border-[#7c602e] bg-[#7c602e]"
                      : "border-gray-300"
                  }`}
                >
                  {selected === pkg.id && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-gray-900 leading-tight">
                    {pkg.name}
                  </p>
                  <p className="text-sm text-gray-400 font-medium">
                    {pkg.credits}
                  </p>
                </div>
              </div>

              {/* Center: Coin Visual */}
              <div className="hidden sm:block ml-44">
                <img src={coins} alt="" />
              </div>

              {/* Right: Price */}
              <div className="text-right">
                <p className="text-xl font-bold text-gray-900 leading-none">
                  {pkg.price}
                </p>
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-tight">
                  {pkg.subtitle}
                </p>
              </div>
            </label>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="w-full max-w-[480px] text-center">
        <button
          onClick={() => navigate("/dashboard/got-coins")}
          className="w-full bg-[#7c602e] hover:bg-[#634d25] text-white py-4 rounded-2xl font-bold text-base uppercase tracking-widest shadow-xl shadow-[#7c602e]/20 transition-all active:scale-[0.98] mb-6"
        >
          CLAIM OFFER
        </button>

        {/* Trust Line */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 font-bold mb-8">
          <CheckCircle2 size={16} className="text-green-500" />
          Safe checkout and 14-day money-back guarantee
        </div>

        {/* Payment Icons */}
        <div className="flex items-center justify-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            className="h-4"
            alt="Mastercard"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
            className="h-3"
            alt="Visa"
          />
          <span className="text-[11px] font-black tracking-tighter text-[#1a1c33] italic">
            MAESTRO
          </span>
          <span className="text-xs font-bold text-gray-800">Pay</span>
          <span className="text-xs font-bold text-gray-400">G Pay</span>
          <span className="text-[11px] font-black text-[#016fcf]">AMEX</span>
        </div>
      </div>
    </div>
  );
};
