<<<<<<< HEAD
import React from "react";
import heroData from "@/data/heroData.json";

const HeroSection: React.FC = () => {
    return (
        <section className=" text-black py-16 px-4   ">
            {/*bg-[url('/image/portfolio/bg_portfolio.png')] no-repeat*/}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

                {/* Левый блок */}
                <div>


                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 ]">
                        {heroData.title}{" "}

                    </h1>

                    <p className="text-[#505050] mb-6">{heroData.description}</p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href={heroData.primaryButton.link}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
                        >
                            {heroData.primaryButton.text} →
                        </a>
                        <a
                            href={heroData.secondaryButton.link}
                            className="flex items-center text-black/80 hover:text-black/50 transition"
                        >
                            ▶ {heroData.secondaryButton.text }
                        </a>
                    </div>
                </div>

                {/* Правый блок */}
                <div className="relative flex justify-center md:justify-end ">
                    <img
                        src={heroData.images[0]}
                        alt="office"
                        className="shadow-lg w-3/4"
                    />
                    <img
                        src={heroData.images[1]}
                        alt="coding"
                        className="absolute -bottom-8 left-28 sm:-bottom-10 sm:left-15 shadow-lg w-2/4 border-r-20 border-t-20 border-white/10 border-opacity-50"
                    />

                </div>
            </div>
        </section>
=======
import { Roboto } from "next/font/google";
import heroData from "@/data/heroData.json";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});


const HeroSection: React.FC = () => {
    return (
        <div className="flex w-full h-180 mt-15">
          <div className="w-[50%]">
             <div className={`ml-30 mt-50 w-190 text-7xl text-[#505050] h-40 absolute  ${roboto.variable}`}>
              {heroData.title}
              <p className="text-2xl mt-20">{heroData.description}</p>
            </div>
          </div>


            <div className="h-180  bg-[url(/foto/ProjectBanner.png)]  bg-cover h-150 py-2  w-400  md:pl-23">
             <div className="ml-100 mt-50">
               <button className="border-1 border-[#505050]  w-80 h-11 rounded-4xl p-2 flex gap-20 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl">
                    <img src={heroData.images[0]} alt="LogoDriveNow" className="w-40 ml-5 h-7" />
                    <img src="foto/chevron.png" alt="chevron" className="rotate-270" />
                </button>
                     <button className="border-1 border-[#505050] w-80 mt-5 h-11 rounded-4xl p-2 flex gap-30 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl">
                        <img src={heroData.images[1]} alt="LogoJuie" className="w-30 ml-5 h-7" />
                        <img src="foto/chevron.png" alt="chevron" className="rotate-270" />
                     </button>
                          <button className="border-1 border-[#505050] w-80 mt-5 h-11 rounded-4xl p-2 flex gap-30 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl">
                            <img src={heroData.images[2]} alt="LogoTanba" className="w-30 h-7 ml-5"/>
                            <img src="foto/chevron.png" alt="chevron" className="rotate-270" />
                          </button>
                               <button className="border-1 border-[#505050] w-80 mt-5 h-11 rounded-4xl p-2 flex gap-30 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl"> 
                                <img src={heroData.images[3]} alt="LogoZherAI" className="w-30 ml-5 h-7" />
                                <img src="foto/chevron.png" alt="chevron" className="rotate-270" />
                              </button>
             </div>
           </div>



        </div>
>>>>>>> 48a90055d98ea7529c3d61274043935e4b9f506a
    );
};

export default HeroSection;
