import React from "react";
import Image from "next/image";
import { benefits } from "./data/data-zip";

export default function FifthSec() {

  return (
    <div className="w-full max-w-7xl mx-auto pb-20">
      <div className="bg-white px-4 sm:px-6 md:px-8 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-sky-500 font-bold text-sm sm:text-base md:text-lg uppercase mb-4">
            Vision
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800">
            내가 추구하는 원칙과 방향
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm: mx-20 md:grid-cols-3 gap-12 sm:gap-8 md:gap-x-15 md:gap-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="relative w-[36px] h-[36px] flex items-center justify-center mb-3">
                <Image
                  src={benefit.icon}
                  alt={benefit.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}