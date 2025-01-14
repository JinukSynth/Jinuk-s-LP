'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['블로그', '블로그', '블로그', '블로그'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-10 lg:px-14 xl:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo - 항상 표시 */}
          <Link href="/" className="text-sky-500 text-lg font-semibold">
            Jinuk's LP
          </Link>

          {/* 우측 섹션 */}
          <div className="flex items-center">
            {/* Desktop Menu - lg 이상에서만 표시 */}
            <div className="hidden lg:flex space-x-10">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/blog`}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-base"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Hamburger Menu Button - lg 미만에서만 표시 */}
            <div className="lg:hidden">
              <Button
                sx={{
                  minWidth: 'auto',
                  padding: 1,
                  color: '#666666',
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenuIcon />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-100">
            <div className="py-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/blog`}
                  className="block px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-base"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}