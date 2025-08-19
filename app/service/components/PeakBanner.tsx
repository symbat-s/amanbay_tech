export default function PeakBanner() {
  return (
    <div className="w-full h-auto md:h-[500px] bg-[#F8F8F8] flex flex-col md:flex-row items-center md:items-start justify-between text-[#505050]">
      <div className="w-full md:w-auto">
        <div className="mt-8 md:mt-[263px] px-4 sm:px-6 md:pl-[130px] md:pr-[130px] text-4xl sm:text-5xl md:text-6xl font-semibold text-center md:text-left">
          Услуги
        </div>

        <div className="hidden font-medium" />
      </div>

   
      <img
        src="/foto/computer(2).png"
        alt="Service Illustration 1"
        className="hidden md:block w-[350px] h-[390px] mt-[140px] object-contain"
        loading="lazy"
        decoding="async"
      />
      <img
        src="/foto/computer.png"
        alt="Service Illustration 2"
        className="w-[220px] sm:w-[300px] md:w-[410px] h-auto md:h-[320px] mt-6 md:mt-[280px] md:ml-[25px] object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}