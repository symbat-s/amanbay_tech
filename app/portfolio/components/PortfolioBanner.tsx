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
    );
};

export default HeroSection;
