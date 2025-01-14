import React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';

export default function SecondSec() {
  const cards = [
    { src: "/image/card1.png", alt: "깡총영어 로고", title: "깡총영어" },
    { src: "/image/card2.png", alt: "태안 로고", title: "보행 분석 웹 사이트" },
    { src: "/image/card3.png", alt: "이음 로고", title: "이음" },
  ];

  return (
    <div className="relative bg-white w-full mx-auto">
      {/* Header Section */}
      <div className="px-4 sm:px-6 md:px-8">
        <p className="text-sky-500 font-bold uppercase text-sm sm:text-base md:text-lg text-center mt-16 sm:mt-20">
          Key Projects
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-4 sm:mt-6 md:mt-7 text-center">
          최고의 경험들{' '}
          <span className="bg-sky-400 text-white px-2 py-1 rounded-md inline-block mt-2 sm:mt-0 sm:inline">
          나의 핵심 프로젝트
          </span>
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="relative mt-10 md:mt-20">
        {/* Blue Background - 배경을 컨텐츠의 상대적 위치에 맞춤 */}
        <div className="absolute inset-0 bg-sky-400" style={{ top: '12%', bottom: '2%' }}></div>

        {/* Cards Container */}
        <div className="relative px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center space-y-24 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4 md:space-x-14">
            {cards.map((card, index) => (
              <div key={index} className="relative w-[280px] sm:w-72 md:w-80 h-52 sm:h-72 md:h-80 rounded-xl shadow-xl">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="rounded-xl object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-[-45px] text-center">
                  <p className="text-white font-semibold text-base sm:text-lg md:text-xl">{card.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center mt-24 sm:mt-24 pb-16">
            <Button
              variant="outlined"
              className="w-[280px] sm:w-auto"
              sx={{
                fontSize: {
                  xs: '0.875rem',
                  sm: '1rem',
                  md: '1.125rem'
                },
                padding: {
                  xs: '0.325rem 0.75rem',
                  sm: '0.25rem 1.2rem',
                  md: '0.375rem 1.25rem'
                },
                color: '#ffffff',
                borderColor: '#ffffff',
                ':hover': { 
                  borderColor: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                },
              }}
            >
              프로젝트 더보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}