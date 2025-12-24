import React from "react";

export const StepIndicator = ({ currentStep }) => {
  const steps = [1, 2, 3];
  const labels = ["Upload", "Choose Style", "Download"];

  return (
    <div className="flex flex-col items-center mb-12">
      <div className="flex items-center w-full max-w-xs relative">
        {/* Connecting Line */}
        <div className="absolute top-4 left-16 w-[200px] h-[1px] bg-primary -z-0" />

        {steps.map((step) => (
          <div key={step} className="flex-1 flex flex-col items-center z-10">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs border border-primary transition-colors duration-300 ${
                currentStep >= step
                  ? "bg-[#7c602e] border-[#7c602e] text-white"
                  : "bg-white border-gray-300 text-primary"
              }`}
            >
              {step}
            </div>
            <span className="text-[10px] uppercase tracking-wider mt-2 text-primary font-semibold">
              {labels[step - 1]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
