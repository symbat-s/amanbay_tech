import React from "react";

const BannerTwo: React.FC = () => {
  return (
    <div className="relative w-full flex justify-center py-20 px-10">
   
      <div className="absolute top-0 right-8  transform -translate-x-1/2 z-0 ">
        <img src="foto/item.png" alt="фон" className=" w-[1000px] h-[1200px] max-w-none max-h-none" />
      </div>

      <div className="absolute top-0 right-8  transform -translate-x-1/2 z-0 ">
        <img src="foto/item2.png" alt="фон" className=" w-[1200px] h-[1200px] max-w-none max-h-none" />
      </div>
 
       <div className="w-[45px] h-[45px] rounded-full  border-[#00000014] border-[1px] bottom-[850px] mr-[1285px] absolute bg-[white] text-black text-center text-2xl flex items-center justify-center z-30">
            1
          </div>

           <div className="w-[45px] h-[45px] rounded-full  border-[#00000014] border-[1px] bottom-[540px] mr-[1090px] absolute bg-[white] text-black text-center text-2xl flex items-center justify-center z-30">
            2
          </div>

          <div className="w-[45px] h-[45px] rounded-full  border-[#00000014] border-[1px] bottom-[230px] mr-[1285px] absolute bg-[white] text-black text-center text-2xl flex items-center justify-center z-30">
            3
          </div>

      <div className="relative z-20 flex flex-col gap-[130px] right-[110px]">
     
        <div className="relative flex items-start gap-4">
          
          <div className="bg-white border border-[#00000014] p-[20px] w-[490px] h-[180px]">
            <h1 className="text-[#505050] text-[25px] font-medium">Technical expertise</h1>
            <p className="font-light text-[#505050] mt-[8px]">
              Our team is proficient in modern programming languages, frameworks, and architectures.
              We offer stable, performant, and scalable solutions for everything from startups to
              enterprise systems.
            </p>
          </div>
        </div>

        <div className="relative flex items-start gap-4 ml-[100px]">
         
          <div className="bg-white border border-[#00000014] p-[20px] w-[490px] h-[180px]">
            <h1 className="text-[#505050] text-[25px] font-medium">Customized approach</h1>
            <p className="font-light text-[#505050] mt-[8px]">
              We start with a deep understanding of your business objectives and create solutions
              that align with your goals. No templates, just what truly works for you.
            </p>
          </div>
        </div>

        <div className="relative flex items-start gap-4">
          
          <div className="bg-white border border-[#00000014] p-[20px] w-[490px] h-[180px]">
            <h1 className="text-[#505050] text-[25px] font-medium">Accountability for results</h1>
            <p className="font-light text-[#505050] mt-[8px]">
              We don’t just deliver a task; we take responsibility for the project’s success. Timely
              feedback, transparent processes, and quality control are the key to your peace of mind.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 ml-[100px] w-[400px] mt-[255px]">
        <h2 className="text-[32px] font-medium text-[#505050]  mb-4">
          Why should you choose our services?
        </h2>
        <p className="text-[#505050] font-light mb-2">
          In a world where digital technologies are changing on a daily basis,
        </p>
        <p className="text-[#505050] font-light">
          it’s important to trust those who are not just keeping up with the times but also shaping
          the trends. Here’s what makes us truly special:
        </p>
      </div>
    </div>
  );
};

export default BannerTwo;
