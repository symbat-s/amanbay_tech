import React from "react";


export default function AboutBanner() {
  return (
    <div className="relative w-full h-[300px] mt-50 ">
      <img
        src="/image/red_team.png"
        alt="team"
        className="absolute inset-0 object-cover w-full h-full z-0"
      />
      <div className="absolute inset-0 bg-opacity-40 z-0" />
      <div className="relative z-10 flex justify-around items-center h-full text-white text-center px-4 ">
        <div>
          <p className="text-8xl font-bold">
            8+
          </p>
          <p className="text-lg" >Years of experience</p>
        </div>
        <div>
          <p className="text-8xl font-bold">150+</p>
          <p className="text-lg">Successful projects</p>
        </div>
        <div>
          <p className="text-8xl font-bold">100%</p>
          <p className="text-lg">Client satisfaction</p>
        </div>
      </div>
    </div>
  );
}


