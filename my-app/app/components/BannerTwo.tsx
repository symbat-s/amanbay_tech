import React from "react";

const BannerTwo: React.FC = () => {
  return (
    <div className="flex font-medium relative">
      {/* Круги с номерами */}
      <div className="w-[45px] h-[45px] text-2xl ml-[125px] mt-[130px] z-20 absolute rounded-full text-center flex items-center justify-center font-bold bg-white border-[#00000014] border">
        1
      </div>
      <div className="w-[45px] h-[45px] text-2xl ml-[225px] mt-[410px] z-20 absolute rounded-full text-center flex items-center justify-center font-bold bg-white border-[#00000014] border">
        2
      </div>
      <div className="w-[45px] h-[45px] text-2xl ml-[125px] mt-[680px] z-20 absolute rounded-full text-center flex items-center justify-center font-bold bg-white border-[#00000014] border">
        3
      </div>

      {/* Блоки с описанием */}
      <div className="ml-[150px] mt-[150px]">
        <div className="w-[490px] h-[180px] border-[#00000014] border p-[20px] z-10 bg-white">
          <h1 className="text-[#505050] text-[25px]">Technical expertise</h1>
          <p className="font-light text-[#505050] mt-[8px]">
            Our team is proficient in modern programming languages, frameworks,
            and architectures. We offer stable, performant, and scalable
            solutions for everything from startups to enterprise systems.
          </p>
        </div>

        <div className="w-[490px] h-[170px] border-[#00000014] border p-[20px] ml-[100px] mt-[100px] z-10 bg-white">
          <h1 className="text-[#505050] text-[28px]">Customized approach</h1>
          <p className="font-light text-[#505050] mt-[8px]">
            We start with a deep understanding of your business <br /> objectives
            and create solutions that align with your goals. <br /> No templates,
            just what truly works for you.
          </p>
        </div>

        <div className="w-[490px] h-[170px] border-[#00000014] border p-[20px] mt-[100px] bg-white">
          <h1 className="text-[#505050] text-[28px]">Accountability for results</h1>
          <p className="font-light text-[#505050] mt-[8px]">
            We don't just deliver a task; we take responsibility for the
            project's success. Timely feedback, transparent processes, and
            quality control are the key to your peace of mind.
          </p>
        </div>
      </div>

      {/* Блок справа */}
      <div className="w-[780px] h-[247px] mt-[280px] ml-[850px]">
        <h1 className="text-[#505050] text-4xl mr-[20px]">
          Why should you choose our services?
        </h1>
        <p className="text-[#505050] mt-[25px]">
          In a world where digital technologies are changing on a daily <br /> basis,
        </p>
        <p className="text-[#505050] mt-[15px]">
          it's important to trust those who are not just keeping up with <br /> the
          times but also shaping the trends. Here's what makes us <br /> truly special:
        </p>
      </div>
    </div>
  );
};

export default BannerTwo;
