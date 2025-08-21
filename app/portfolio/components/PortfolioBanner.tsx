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
    );
};

export default HeroSection;
