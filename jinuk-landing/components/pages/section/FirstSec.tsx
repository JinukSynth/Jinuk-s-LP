// First Section Component
import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function FirstSec() {
  return (
    <div className="relative w-full mx-auto">
      {/* Main Container - 반응형 높이 및 여백 적용 */}
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] px-4 sm:px-6 md:px-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/image/fristsec.png"
            alt="Background Image"
            fill
            quality={100}
            priority
            className='object-cover'
          />
        </div>

        {/* Overlay with consistent opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content Container - 개선된 spacing 적용 */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 sm:space-y-6 md:space-y-8">
          {/* Heading - 상세 타이포그래피 적용 */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            01년생 개발자의 <br/> 
            작지만 꾸준한 <br/> 
            성장과 도전 이야기
          </h1>

          {/* Subheading - 상세 타이포그래피 적용 */}
          <p className="text-base sm:text-lg md:text-xl font-medium text-white">
            Innovative Dev Tech
          </p>

          {/* Button - 상세 스타일링 적용 */}
          <Button 
            variant="outlined" 
            className="mt-4 sm:mt-6 md:mt-8"
            sx={{ 
              fontSize: {
                xs: '0.875rem', // text-sm
                sm: '1rem',     // text-base
                md: '1.125rem'  // text-lg
              },
              color: 'white', 
              borderColor: 'white',
              padding: {
                xs: '0.125rem 0.75rem', // py-0.5 px-3
                sm: '0.25rem 1rem',     // py-1 px-4
                md: '0.375rem 1.25rem'  // py-1.5 px-5
              },
              borderRadius: 0,
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            포트폴리오 보기
          </Button>
        </div>
      </div>
    </div>
  );
}