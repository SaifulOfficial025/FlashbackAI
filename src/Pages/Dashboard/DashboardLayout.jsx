import React from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#fdfcfb] flex flex-col font-sans text-[#1a1a1a]">
      <Topbar />
      <div className="flex flex-1 pt-[72px]">
        {" "}
        {/* pt for fixed topbar height */}
        <Sidebar className="w-72 fixed left-0 h-[calc(100vh-72px)] border-r border-primary" />
        <main className="flex-1 ml-72 relative flex flex-col">
          <Outlet />
        </main>
      </div>
    </div>
  );
};