import Image from "next/image";

export default function Banner() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center z-[-1] flex items-center justify-center px-6 "
      style={{ backgroundImage: "url('image/Peak.png')" }}
    >
      <div className="max-w-[1200px] w-full flex flex-col items-start gap-10 text-white">
        <div className="space-y-4">
          <div className="text-[#d9011c] text-3xl sm:text-4xl md:text-5xl font-bold">
            Welcome to
          </div>
          <div className="text-[#babbbb] text-2xl sm:text-3xl md:text-4xl font-semibold">
            Amanbay Tech!
          </div>
        </div>

        <div className="max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
          <p>
            Empower Your Business for the Digital Age – <br />Cutting-Edge Web,
            Mobile Development,
            and DevOps <br /> Solutions for Your Success!
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <button className="text-lg sm:text-xl bg-[#c01f26] hover:bg-[#c01f2796] text-white px-6 py-3 rounded-[30px]">
            Our services
          </button>
          <button className="text-lg sm:text-xl border-2 border-white/50 text-white hover:bg-[#babbbb] hover:text-[black] px-6 py-3 rounded-[30px]">
           
          </button>
        </div>
      </div>
    </div>
  );
}