"use client";

import { ToastContainer } from "react-toastify";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable={false}
      toastClassName={() =>
        "bg-[#2C1404] text-[#F5EFE8] border border-[#E5D5C2] shadow-[0_24px_80px_rgba(44,20,4,0.18)] px-4 py-3 flex items-start gap-3"
      }
      toastStyle={{
        fontSize: "0.95rem",
        fontWeight: 600,
        lineHeight: "1.55",
        letterSpacing: "0.01em",
      }}
      // progressClassName={() => "bg-[#EAA315]"}
      className="!top-6 !right-4 sm:!top-8 sm:!right-8"
    />
  );
}
