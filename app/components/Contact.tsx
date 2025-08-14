"use client";

import { useState } from "react";
import Image from "next/image";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div>
       <h1 className="font-bold text-5xl text-center my-10" style={{ fontFamily: "Inter" }}>
          Контакты
        </h1>

        <iframe
          src="https://yandex.kz/map-widget/v1/?ll=69.606586%2C42.341686&z=16&l=map&pt=69.606586,42.341686,pm2rdm"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
    
    <div className="bg-white">
      <div className="flex justify-between pl-20 mt-10">
        <div className="w-full ">
          <h1 className="font-bold text-4xl" style={{ fontFamily: "Inter" }}>У вас остались вопросы?</h1>
          <p className="mt-5 text-sm">Напишите нам и наш менеджер с радостью на них ответит.</p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-7 md:w-[450px]">
            <input
              type="text"
              name="name"
              placeholder="Ваше имя*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Номер телефона*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              name="message"
              placeholder="Текст сообщения*"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <button type="submit"className="w-full bg-[#C01F26] hover:bg-red-700 text-white font-bold text-xl py-3 rounded">Отправить</button>
          </form>
        </div>

        <div className="w-full ml-20">
          <h1 className="font-bold text-4xl" style={{ fontFamily: "Inter" }}>Наш адрес</h1>
          <p className="mt-3 text-sm">г. Шымкент, проспект Конаева 20/1</p>

          <h1 className="font-bold text-4xl mt-10" style={{ fontFamily: "Inter" }}>Время работы</h1>
          <p className="mt-3 text-sm">9:00 - 20:00</p>
          
           
        <div className="flex gap-10">
        <div className="mt-10 flex">
            <Image
                src="/call.png"
                alt="call"
                width={30}
                height={30}
                className="object-contain"
                priority
            />
            <div className="block ml-3">
                <h1 className="text-black text-sm">ТЕЛЕФОН</h1>
                <p className="text-[#C01F26]">+7 777 060 80 31</p>
            </div>
        </div>
        <div className="mt-10 flex">
            <Image
                src="/sms.png"
                alt="sms"
                width={30}
                height={30}
                className="object-contain"
                priority
            />
            <div className="block ml-3">
                <h1 className="text-black text-sm">EMAIL</h1>
                <p className="text-[#C01F26]">info@Amanbay tech.kz</p>
            </div>
        </div>
          </div>
        <h1 className="text-sm mt-7 w-[470px]">По всем вопросам, связанным с программным обеспечением Amanbay tech, пожалуйста, звоните по телефону</h1>
        <h1 className="font-bold text-black mt-5 text-lg">+7 777 060 80 31</h1>
        </div>
      </div>
    </div>
    </div>
  );
}
