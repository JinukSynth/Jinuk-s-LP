import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

export default function ThirdSec() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row h-auto md:h-[70vh] bg-white px-4 sm:px-6 md:px-8 py-16 md:py-0">
        {/* Left Section: Text */}
        <div className="flex flex-col w-full md:w-1/2 md:justify-center md:ml-24 space-y-4 sm:space-y-5 md:space-y-6">
          <div>
            <p className="text-sky-500 font-bold text-sm sm:text-base md:text-lg uppercase mb-2 sm:mb-3 md:mb-4">
              About Blog
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
              새내기 개발자가 겪어온 <br /> 배움의 기록
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mt-2 sm:mt-3">
              프론트엔드로 시작한 여정길에서 쌓은 경험과 기술, 그리고 <br className="hidden md:block"/> 
              개발하면서 궁금했던 점을 기록하고 공유합니다.
            </p>
          </div>
          <Button
            className="w-full sm:w-auto md:w-5/12 mt-4"
            variant="outlined"
            // disableRipple prop 제거 (ripple 효과 활성화)
            sx={{
              fontSize: {
                xs: '0.875rem',
                sm: '1rem',
                md: '1.125rem'
              },
              padding: {
                xs: '0.5rem',
                sm: '0.5rem 1rem',
                md: '0.75rem 1.5rem'
              },
              color: "#3CA7DF",
              borderColor: "#3CA7DF",
              backgroundColor: 'transparent',
              '&:hover': {
                borderColor: "#3CA7DF",
                backgroundColor: 'transparent'  // hover 시 배경색 변경 없음
              },
              '& .MuiTouchRipple-root': {
                color: '#3CA7DF'
              }
            }}
          >
            블로그 탐방하기
          </Button>
        </div>

        {/* Right Section: Image */}
        <div className="flex w-full md:w-1/2 justify-center items-center mt-10 md:mt-0">
          <div className="relative w-full md:w-[36vw] h-[250px] sm:h-[300px] md:h-[40vh] shadow-xl">
            <Image
              src="/image/thridsec.png"
              alt="About Us"
              fill
              className="rounded-md object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}