import React, { useState } from "react";
import { Globe, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NotificationModal from "./NotificationModal";

export const Topbar = () => {
  const [openNotif, setOpenNotif] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] bg-white border-b border-primary flex items-center justify-between px-8 z-50">
      <div className="w-72">
        {" "}
        {/* Align logo with sidebar width */}
        <span className="text-xl font-serif font-bold text-[#7c602e] tracking-tight">
          PureMotion
        </span>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpenNotif((v) => !v);
          }}
          className="text-gray-700 hover:text-[#7c602e] transition-colors relative"
          aria-label="Open notifications"
        >
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Credit Badge (clickable) */}
        <button
          onClick={() => navigate("/dashboard/get-Credit")}
          className="bg-[#f2ede4] px-4 py-2 rounded-full flex items-center gap-2 border border-[#7c602e]/10 hover:shadow-sm"
          aria-label="Get Credit"
        >
          <span className="text-sm text-gray-500 font-medium">Credit:</span>
          <span className="text-sm text-[#7c602e] font-bold">3</span>
        </button>
      </div>

      {openNotif && (
        <NotificationModal
          anchor="top-right"
          onClose={() => setOpenNotif(false)}
        />
      )}
    </header>
  );
};
