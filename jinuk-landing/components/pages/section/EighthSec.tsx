import React from "react";

// 크롤링 가능성이 있으므로 주소, 전화번호, 이메일은 이미지로 변환하여 사용
export default function EighthSec() {
 return (
   <div className="bg-[#222020] min-h-[200px] flex flex-col justify-center items-center text-white px-4 py-8">
     {/* Mobile View */}
     <div className="block sm:hidden">
       <p className="text-center text-sm font-medium space-y-2">
         <span className="block mb-2">운영자: 정진욱</span>
         <span className="block mb-2">위치: 경기도 수원시 권선구 칠보로 102</span>
         <span className="block mb-2">T.010-3847-0467</span>
         <span className="block mb-2">E.jinuk.work@gmail.com</span>
         <span className="block">
           Copyright (c) Jinuk Portfolio.
           <br />
           All Rights Reserved
           <br />
           Designed with creativity by Qshop
         </span>
       </p>
     </div>

     {/* Desktop View */}
     <div className="hidden sm:block">
       <p className="text-center text-sm font-semibold leading-6">
         운영자: 정진욱 | 위치: 경기도 수원시 권선구 칠보로 102
         <br />
         T.010-3847-0467 E.jinuk.work@gmail.com | Copyright (c) Jinuk Portfolio. All Rights Reserved | Designed with creativity by Qshop
       </p>
     </div>
   </div>
 );
}