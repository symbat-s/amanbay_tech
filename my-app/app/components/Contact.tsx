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
    <div className="bg-white">
      <div className="flex justify-between pl-20 mt-10">
        <div className="w-full ">
          <h1 className="font-bold text-4xl" style={{ fontFamily: "Inter" }}>Do you have any questions?</h1>
          <p className="mt-5 text-sm">Write to us and our manager will be happy to answer them.</p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-7 md:w-[450px]">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              name="message"
              placeholder="Message text*"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <button type="submit"className="w-full bg-[#C01F26] hover:bg-red-700 text-white font-bold text-xl py-3 rounded">SEND</button>
          </form>
        </div>

        <div className="w-full ml-20">
          <h1 className="font-bold text-4xl" style={{ fontFamily: "Inter" }}>Our address</h1>
          <p className="mt-3 text-sm">Shymkent, Konaev Avenue 20/1</p>

          <h1 className="font-bold text-4xl mt-10" style={{ fontFamily: "Inter" }}>Opening hours</h1>
          <p className="mt-3 text-sm">9:00 - 20:00</p>
          
            {/* <div className="mt-7">
            <Image
                src="/insta.png"
                alt="insta"
                width={30}
                height={30}
                className="object-cover"
                priority
            />
          </div> */}
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
                <h1 className="text-black text-sm">Phone</h1>
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
                <h1 className="text-black text-sm">Email</h1>
                <p className="text-[#C01F26]">info@Amanbay tech.kz</p>
            </div>
        </div>
          </div>
        <h1 className="text-sm mt-7 w-[370px]">For all questions related to Amanbay tech software, please call</h1>
        <h1 className="font-bold text-black mt-5 text-lg">+7 777 060 80 31</h1>
        </div>
      </div>
    </div>
  );
}
