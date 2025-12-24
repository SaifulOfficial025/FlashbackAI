import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    q: "Do I need any technical skills?",
    a: "Not at all! FlashbackAI is designed for everyone. Simply upload your photo, choose a style, and we handle the rest. The entire process is intuitive and takes less than a minute.",
  },
  {
    q: "How long does it take?",
    a: "Most videos are generated in under 30 seconds with our optimized AI processing.",
  },
  {
    q: "Can I choose the animation style?",
    a: "Yes! You can select from cinematic, nostalgic, or custom motion styles to fit your memory best.",
  },
  {
    q: "Is my photo safe?",
    a: "Your photos are encrypted and automatically deleted after processing for your privacy.",
  },
  {
    q: "Can I download/share my video?",
    a: "Absolutely! You can download your video in HD or share it directly with friends and family.",
  },
  {
    q: "Will old photos work?",
    a: "Yes, FlashbackAI works beautifully with vintage and even damaged photographs.",
  },
  {
    q: "Is it compatible with all devices?",
    a: "You can create and view videos on any device — desktop, tablet, or mobile.",
  },
];

function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center py-14 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 text-base text-center max-w-7xl mb-8">
        Clear answers to help you feel confident at every step.
      </p>
      <div className="w-full max-w-5xl flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`bg-[#fafbfc] rounded-xl border border-[#ececec] transition shadow-sm`}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              aria-expanded={openIdx === idx}
            >
              <span className="font-semibold text-lg text-left text-gray-900">
                {faq.q}
              </span>
              <IoIosArrowDown
                className={`text-2xl text-gray-500 transition-transform duration-200 ${
                  openIdx === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIdx === idx && (
              <div className="px-6 pb-4 text-gray-700 text-base animate-fadein">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
