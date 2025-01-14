import React from "react";
import { highlights } from "./data/data-zip";

export default function SixthSec() {

  return (
    <div className="w-full mx-auto">
      <div className="bg-[#F1F5F9] min-h-[50vh] sm:min-h-[40vh] md:min-h-[50vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 relative">
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(60, 167, 223, 0.1)" }}
        ></div>

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 relative z-10">
          <p className="text-sky-500 font-bold text-sm sm:text-base md:text-lg uppercase mb-2 sm:mb-4">
            Highlights
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            기억에 남는 순간들
          </h2>
        </div>

        {/* Highlights List */}
        <div className="flex flex-col w-full max-w-4xl mx-auto relative z-10 space-y-2 sm:space-y-3">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-neutral-500 py-3 mx-10"
          >
            <div className="text-neutral-700 font-medium text-sm sm:text-base md:text-lg pr-4 flex items-center">
              <span className="font-semibold text-[#4A8BB3] mr-2">&gt;</span>
              {/* 화면 크기에 따라 다른 텍스트 표시 */}
              <span className="block sm:hidden">{highlight.mobile}</span>
              <span className="hidden sm:block">{highlight.full}</span>
            </div>
            <span className="text-sky-400 font-bold text-lg sm:text-xl shrink-0">⮞</span>
            {/* 추후 해당 리스트 펼치면 체크되면서 펼쳐지는 기능 구현 예정 */}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}