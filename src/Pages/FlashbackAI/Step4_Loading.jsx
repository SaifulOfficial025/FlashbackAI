import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";

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
      {/* --- TESTIMONIAL --- */}
      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 mb-16 relative text-left">
        <div className="flex gap-4 items-start">
          <Heart
            size={20}
            fill="#facc15"
            className="text-yellow-400 mt-1 flex-shrink-0"
          />
          <p className="text-gray-700 leading-relaxed italic font-medium">
            "I animated an old photo of my childhood dog, Max. Seeing him move
            again — that little head tilt, his gentle expression — it brought me
            to tears. It felt like having a moment with him again."
          </p>
        </div>
        <p className="mt-4 text-[11px] font-bold text-gray-400 ml-9 tracking-wide uppercase">
          — Sarah M., New York
        </p>
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
