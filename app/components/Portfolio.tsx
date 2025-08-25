import React from "react";
import portfolioData from "@/data/Portfolio.json";
import { ArrowRight } from "lucide-react";

interface PortfolioItem {
    title: string;
    description: string;
    image: string;
}

export default function Portfolio() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                <h2 className="text-3xl font-bold">Портфолио</h2>
                <p className="max-w-lg text-gray-600">
                    Мы стремимся к длительным отношениям с погружением в мир бизнеса клиента.
                    Это наш способ находить точные, красивые и своевременные решения.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {portfolioData.map((item: PortfolioItem, index) => (
                    // <div key={index} className={`p-6 rounded-lg flex flex-col sm:flex-row items-center sm:items-start gap-4 ${item.bgColor}`}>
                    //     <img
                    //         src={item.image}
                    //         alt={item.title}
                    //         className="w-40 sm:w-48 object-contain"
                    //     />
                    //     <div className="flex-1">
                    //         <h3 className="text-lg font-semibold">{item.title}</h3>
                    //         <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                    //     </div>
                    //     <ArrowRight className="text-gray-800 shrink-0" />
                    <div key={index} className={`p-6 rounded-lg  sm:flex-row  sm:items-start gap-4 `}>
                        {/* Верхняя часть с изображением */}
                        <div className="relative bg-[#f8d9d6] flex justify-center items-center p-6">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="max-h-72 object-contain"
                            />
                            <a
                                href="#"
                                className="absolute bottom-0 right-0 border-none  bg-white p-4 hover:bg-gray-100 transition"
                            >
                                <ArrowRight size={30} />
                            </a>
                        </div>

                        {/* Нижняя часть с текстом */}
                        <div className="p-4 border-none ">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

