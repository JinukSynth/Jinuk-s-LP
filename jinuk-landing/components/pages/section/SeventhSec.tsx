import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { images } from "./data/data-zip";

export default function SeventhSec() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-white py-16 md:py-20 px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sky-500 font-bold text-sm sm:text-base md:text-lg uppercase mb-2">
            Connect with Me
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            소셜미디어에서<span className="text-sky-500">우리와 연결하세요</span>
          </h2>
          <p className="font-bold text-xl sm:text-2xl text-gray-800 mb-8">#BRAND</p>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="transition-transform duration-300 group-hover:scale-105 object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <p className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.hover}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center space-x-6 mt-12">
          <Button
            variant="outlined"
            sx={{
              borderColor: '#1F2937', // gray-800
              color: '#1F2937',
              borderRadius: '9999px',
              px: 4,
              py: 1,
              '&:hover': {
                backgroundColor: '#F3F4F6', // gray-100
                borderColor: '#1F2937',
              },
            }}
          >
            채널 방문하기
          </Button>
        </div>
      </div>
    </div>
  );
}