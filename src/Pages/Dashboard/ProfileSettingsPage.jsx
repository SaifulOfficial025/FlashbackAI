import React, { useState } from "react";
import { User, Copy, LogOut, ChevronDown } from "lucide-react";

const historyData = [{ id: "2222JJJ2", Credit: 1, date: "11\\12\\2222" }];

export const ProfileSettingsPage = () => {
  const [referral] = useState("httpdhbfhbw b"); // Matches the typo in image

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="flex-1 bg-[#fdfcfb] py-12 px-6 flex flex-col items-center animate-in fade-in duration-500 overflow-y-auto">
      <div className="w-full max-w-xl">
        {/* Header */}
        <h1 className="text-3xl font-serif font-bold text-gray-900 text-center mb-10">
          Settings
        </h1>

        {/* Profile Avatar Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 rounded-full bg-[#7c602e] flex items-center justify-center text-white mb-4 shadow-lg">
            <User size={48} fill="currentColor" />
          </div>
          <p className="text-sm font-medium text-gray-500 italic">
            johndoe@gmail.com
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6 mb-10">
          {/* Language Selection
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">Language</label>
            <div className="relative">
              <div className="w-full bg-white border border-gray-100 rounded-xl py-3.5 px-5 flex items-center justify-between shadow-sm cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🇬🇧</span>
                  <span className="text-sm font-medium text-gray-400">English</span>
                </div>
                <ChevronDown size={18} className="text-gray-300" />
              </div>
            </div>
          </div> */}

          {/* Referral URL */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">
              Referral URL
            </label>
            <div className="relative">
              <input
                readOnly
                value={referral}
                className="w-full bg-white border border-gray-100 rounded-xl py-3.5 px-5 text-sm text-gray-400 font-medium outline-none shadow-sm"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#7c602e] transition-colors">
                <Copy size={18} />
              </button>
            </div>
          </div>

          {/* Social Connections */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">
              Connect with account
            </label>
            <div className="space-y-3">
              {/* Google */}
              <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    className="w-6 h-6"
                    alt="Google"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-none mb-1">
                      Google
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Not connected
                    </p>
                  </div>
                </div>
                <button className="text-[11px] font-bold text-[#7c602e] hover:underline uppercase tracking-wider">
                  Link
                </button>
              </div>

              {/* Facebook */}
              <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                    className="w-6 h-6"
                    alt="Facebook"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-none mb-1">
                      Facebook
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Not connected
                    </p>
                  </div>
                </div>
                <button className="text-[11px] font-bold text-[#7c602e] hover:underline uppercase tracking-wider">
                  Link
                </button>
              </div>
            </div>
          </div>

          {/* Credit History Table */}
          <div className="space-y-2">
            <div className="flex items-center justify-between mb-1 px-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">
                Credit uses history
              </label>
              <button className="text-[11px] font-bold text-[#7c602e]/60 hover:text-[#7c602e]">
                View All
              </button>
            </div>

            <div className="bg-white border border-gray-100 rounded-[1.5rem] overflow-hidden shadow-sm">
              <table className="w-full text-center text-[11px]">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-500 font-bold border-b border-gray-100">
                    <th className="py-4 font-bold uppercase tracking-wider">
                      Moment ID
                    </th>
                    <th className="py-4 font-bold uppercase tracking-wider">
                      Credit Use
                    </th>
                    <th className="py-4 font-bold uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((row, idx) => (
                    <tr key={idx} className="text-gray-900 font-medium">
                      <td className="py-5 underline decoration-[#7c602e]/30 underline-offset-4 text-gray-400 cursor-pointer">
                        {row.id}
                      </td>
                      <td className="py-5 text-gray-400">{row.Credit}</td>
                      <td className="py-5 text-gray-400">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Logout Footer */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-bold text-red-500/80 hover:text-red-500 transition-colors"
          >
            <LogOut size={18} />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};
