import React from "react";
import servicesData from "@/data/servicesData.json";

const ServicesSection: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 space-y-20">
            {servicesData.map((service, index) => (
                <div
                    key={service.id}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                        index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                    {/* Изображение */}
                    <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-[605px] h-[500px] md:w-[360px] object-contain"
                        />
                    </div>

                    {/* Контент */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                        <p className="text-gray-700 mb-4">{service.description}</p>
                        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                            {service.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        <a href={service.link} target="_blank" className="px-6 py-2 border flex w-45   border-gray-400 rounded-full hover:text-[white] hover:bg-[#908D8D] transition">
                            {service.buttonText}
                            <div className="mt-[1px] ml-8">{service.icon}</div>
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ServicesSection;
