import React, { useState } from "react";
import { CheckCircle2, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Credit from "../../../public/coins.png";

const packages = [
  {
    id: "max",
    name: "Max Pack",
    credits: "80 Credits",
    price: "$0.79",
    subtitle: "Per Credit",
    badge: "BEST VALUE",
    badgeColor: "bg-[#5FAF8E]",
    borderColor: "border-gray-200",
  },
  {
    id: "power",
    name: "Power Pack",
    credits: "40 Credits",
    price: "$0.99",
    subtitle: "Per Credit",
    badge: "MOST POPULAR",
    badgeColor: "bg-[#fdca17]",
    borderColor: "border-gray-200",
  },
  {
    id: "value",
    name: "Value Pack",
    credits: "20 Credits",
    price: "$1.49",
    subtitle: "Per Credit",
    borderColor: "border-gray-200",
  },
  {
    id: "boost",
    name: "Boost Pack",
    credits: "10 Credits",
    price: "$1.79",
    subtitle: "Per Credit",
    borderColor: "border-gray-200",
  },
];

export const GetCreditPage = () => {
  const [selected, setSelected] = useState("max");
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-[#fdfcfb] py-12 px-6 flex flex-col items-center animate-in fade-in duration-500">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12">
        Choose Your Package
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
                      ? "border-[#5FAF8E] bg-[#5FAF8E]"
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
                <img src={Credit} alt="" />
              </div>

              {/* Right: Price */}
              <div className="text-right">
                <p className="text-xl font-bold text-gray-900 leading-none">
                  {pkg.price}
                </p>
                <p className="text-[11px] text-gray-400 font-medium  tracking-tight">
                  {pkg.subtitle}
                </p>
              </div>
            </label>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="w-full max-w-[630px] text-center">
        <button
          onClick={() => navigate("/dashboard/got-Credit")}
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
        <div className="flex items-center justify-center  hover:grayscale-0 transition-all">
          <img src="/payments.png" alt="" className="h-16" />
        </div>
      </div>
    </div>
  );
};
