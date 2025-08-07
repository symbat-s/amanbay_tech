// import Image from "next/image";
// export default function Banner() {
//   return (

//      <div className="flex gap-[225px]"style={{ fontFamily: "Poppins" }}>
//         <div>
//         <div className="w-[690px] h-[240px] mt-[200px] ml-[89px] text-bold text-8xl"><span className="text-[#EA4D46]">Welocome to </span> Amanbay Tech!</div>
//         <div className="w-[705px] h-[144px] text-[35px] ml-[89px]">Empower Your Business for the Digital Age - Cutting-Edge Web, Mobile Development, and DevOps Solutions for Your Success!</div>
//         <a href=""><button className="w-[250px] h-[65px] ml-[80px] bg-[#EA4D46] text-[white] text-center text-2xl rounded-[10px] mt-[70px]">Show services</button></a>
//     <div
//       className="w-full h-screen bg-cover bg-center z-[-1] flex items-center justify-center px-6 "
//       style={{ backgroundImage: "url('image/Peak.png')" }}
//     >
//       <div className="max-w-[1200px] w-full flex flex-col items-start gap-10 text-white ">
//         <div className="space-y-4">
//           <div className="text-[#d9011c] text-3xl sm:text-4xl md:text-5xl font-bold">
//             Welcome to
//           </div>
//           <div className="text-[#babbbb] text-2xl sm:text-3xl md:text-4xl font-semibold">
//             Amanbay Tech!
//           </div>
//         </div>

//         <div className=" text-[#FEEBEB]  sm:text-lg md:text-2xl leading-relaxed tracking-wide" style={{ fontFamily: "Urbanist" }}>
//           <p>
//             Empower Your Business for the Digital Age – <br />Cutting-Edge Web,
//             Mobile Development,
//             and DevOps <br /> Solutions for Your Success!
//           </p>
//         </div>

//         <div>
//            <Image src="/image/PeakBanner.png" alt="Баннер" width={466} height={400} className="absolute mr-[50px]" />
//         </div>
//      </div>
//   );
// }
'use client';

import React from 'react';

export default function Banner() {
  return (
    <div className="w-full h-[300px] bg-blue-500 flex items-center justify-center">
      <h1 className="text-white text-3xl font-bold">Welcome to the Banner!</h1>
    </div>
  );
}
