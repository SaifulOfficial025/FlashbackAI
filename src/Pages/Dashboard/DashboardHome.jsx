import React from "react";
import { ImagePlus, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DashboardHome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-[#fdfcfb]/50">
      {/* Promo Banner */}
      <div className="bg-[#f2ede4]/60 p-3 flex justify-center items-center gap-6 border-b border-[#e5d5bc]/20">
        <p className="text-[13px] font-medium text-gray-700">
          Get free 10 coins
        </p>
        <button className="bg-white px-4 py-1.5 rounded-full text-[11px] font-bold shadow-sm hover:shadow-md transition-all">
          Get fee coins
        </button>
      </div>

      {/* Main Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <div className="bg-white p-6 rounded-[2.5rem] shadow-sm mb-8">
          <ImagePlus size={48} strokeWidth={1.5} className="text-gray-400" />
        </div>
        <h2 className="text-3xl font-serif font-medium text-gray-900 mb-3">
          You haven't added any moments yet
        </h2>
        <p className="text-sm text-gray-400 font-medium">
          Upload your photo to bring it life and start memory collecction
        </p>
      </div>

      {/* Upload Action Button */}
      <div
        onClick={() => navigate("/dashboard/moments")}
        className="p-8 pb-12 flex justify-center"
      >
        <button className="bg-[#7c602e] hover:bg-[#634d25] text-white w-full max-w-md py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-[#7c602e]/20 active:scale-[0.98] transition-all">
          {/* <Upload size={20} /> */}
          <span>Make photo live</span>
        </button>
      </div>
    </div>
  );
};
