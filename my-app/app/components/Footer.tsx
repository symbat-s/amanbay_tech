import Contact from "./Contact";

import Image from "next/image";


export default function Footer(){
  return (
    <div className="bg-white">
      <div>
        <h1 className="font-bold text-5xl text-center mb-10" style={{ fontFamily: "Inter" }}>
          Контакты
        </h1>

        <iframe
          src="https://yandex.kz/map-widget/v1/?ll=69.606586%2C42.341686&z=16&l=map&pt=69.606586,42.341686,pm2rdm"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>


        <Contact />


<div className="mt-10 bg-[#302D2D]">
        <div className="mt-10 bg-[#302D2D] text-white text-sm p-20 flex flex-col md:flex-row justify-between gap-10">
          <p className="max-w-md">
            If you are looking for a reliable IT partner for digital transformation, process automation or development of modern solutions, contact us. Amanbay Tech is a team of professionals, open to cooperation and ready to offer effective technologies and favorable conditions.
          </p>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Contacts</li>
            <li>About Us</li>
            <li>Terms</li>
          </ul>

          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>User Agreement</li>
            <li>Collection and processing of personal data</li>
            <li>Frequently asked questions</li>
            <div className="flex gap-5 mt-5">
              <Image
                src="/telegram.png"
                alt="telegram"
                width={15}
                height={15}
                className="object-contain"
                priority
              />
              <Image
                src="/whatsapp.png"
                alt="whatsapp"
                width={20}
                height={20}
                className="object-contain"
                priority
              />
              <Image
                src="/instagram.png"
                alt="instagram"
                width={20}
                height={20}
                className="object-contain"
                priority
              />
            </div>
          </ul>
      
      </div>
      
</div>

    </div>

  <div className="md:pl-[40px] md:pr-[40px] w-full h-[70px] bg-[#302D2D] ">
     <div className="w-[1400px] h-[2px] bg-[#D4D4D4] "></div>
     <div className="text-[white] font-inter text-center mt-[30px]" >© 2025 Amanbay tech® Global Inc</div>
  </div>
     
    

    </div>
  );
}
