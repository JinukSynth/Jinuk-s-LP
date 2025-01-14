import React from "react";

export default function FourthSec() {
  return (
    <div className="relative w-full mx-auto">
      <div className="relative h-[40vh] sm:h-[35vh] md:h-[30vh] flex items-center justify-center">
        {/* Background Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #B1E5F2, #74BCE3, #1D82B8)",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>

        {/* Content */}
        <div className="relative text-center text-white z-10 px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold leading-relaxed sm:leading-relaxed md:leading-relaxed">
            <span className="block">개발은 단순 업무가 아닌</span>
            <span className="block">일상과 연결되는</span>
            <span className="block">또 하나의 방식이라고 생각합니다.</span>
          </h2>
        </div>
      </div>
    </div>
  );
}