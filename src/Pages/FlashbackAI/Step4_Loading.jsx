import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { BsFillStarFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import elise from "../../../public/Elise D.jpg";
import liam from "../../../public/Liam G..jpg";

export const Step4_Loading = ({ onNext }) => {
  const [progress, setProgress] = useState(0);

  const statusSteps = [
    "Analyzing your photo",
    "Enhancing details",
    "Bringing your memory to life",
    "Preparing your download",
  ];

  // --- SVG CONFIG ---
  const SIZE = 160;
  const STROKE = 20;
  const RADIUS = (SIZE - STROKE) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onNext, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onNext]);

  return (
    <div className="max-w-2xl mx-auto text-center py-8">
      {/* --- TESTIMONIALS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
        {/* Card 4 - Elise D. */}
        <div
          className="bg-[#f2ebe2] rounded-2xl shadow p-5 flex flex-col border border-[#e5e0d6] relative min-h-[320px]"
          style={{ boxShadow: "0 2px 12px 0 rgba(60, 40, 10, 0.07)" }}
        >
          <div className="flex items-center mb-2 mt-2">
            {[...Array(5)].map((_, idx) => (
              <BsFillStarFill
                key={idx}
                className="text-[#634910] text-base mr-1"
              />
            ))}
          </div>
          <p className="text-gray-800 text-[15px] mb-4 flex-1">
            "I surprised my friend with this to bring their family photo to
            life. We didn't expect such an emotional reaction."
          </p>
          <div className="border-t border-[#e5e0d6] pt-3 flex items-center gap-3 mt-auto">
            <img
              src={elise}
              alt="Elise D."
              className="w-9 h-9 rounded-full object-cover border-2 border-white shadow"
            />
            <div>
              <span className="font-semibold text-gray-900 block leading-tight">
                Elise D.
              </span>
              <span className="text-xs text-gray-500 block">Paris, France</span>
              <span className="flex items-center text-xs text-[#1da1f2] mt-1 font-medium">
                <MdVerified className="mr-1 text-base" /> Verified user
              </span>
            </div>
          </div>
        </div>

        {/* Card 6 - Liam G. */}
        <div
          className="bg-[#f2ebe2] rounded-2xl shadow p-5 flex flex-col border border-[#e5e0d6] relative min-h-[320px]"
          style={{ boxShadow: "0 2px 12px 0 rgba(60, 40, 10, 0.07)" }}
        >
          <div className="flex items-center mb-2 mt-2">
            {[...Array(5)].map((_, idx) => (
              <BsFillStarFill
                key={idx}
                className="text-[#634910] text-base mr-1"
              />
            ))}
          </div>
          <p className="text-gray-800 text-[15px] mb-4 flex-1">
            "The realism is unbelievable. PureMotion turned a simple photo into
            something my family will treasure forever."
          </p>
          <div className="border-t border-[#e5e0d6] pt-3 flex items-center gap-3 mt-auto">
            <img
              src={liam}
              alt="Liam G."
              className="w-9 h-9 rounded-full object-cover border-2 border-white shadow"
            />
            <div>
              <span className="font-semibold text-gray-900 block leading-tight">
                Liam G.
              </span>
              <span className="text-xs text-gray-500 block">
                Toronto, Canada
              </span>
              <span className="flex items-center text-xs text-[#1da1f2] mt-1 font-medium">
                <MdVerified className="mr-1 text-base" /> Verified user
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- RADIAL LOADER --- */}
      <div className="relative w-44 h-44 mx-auto mb-12">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-full h-full -rotate-90"
        >
          {/* Background ring */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#f3f4f6"
            strokeWidth={STROKE}
            fill="transparent"
          />

          {/* Progress ring */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#7c602e"
            strokeWidth={STROKE}
            fill="transparent"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE - (CIRCUMFERENCE * progress) / 100}
            strokeLinecap="round"
            className="transition-all duration-200 ease-linear"
          />
        </svg>

        {/* Percentage label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{progress}%</span>
        </div>
      </div>

      {/* --- STATUS TEXT --- */}
      <div className="space-y-4">
        {statusSteps.map((text, i) => (
          <div
            key={i}
            className={`text-sm transition-all duration-500 ${
              progress > i * 25
                ? "text-gray-900 font-bold opacity-100 translate-y-0"
                : "text-gray-300 opacity-50 translate-y-2"
            }`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
