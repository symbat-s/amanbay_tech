import Image from "next/image";
import Link from "next/link";
import footerData from "@/data/Footer.json";

export default function Footer() {
  const { description, links, social, copyright } = footerData.footer;

  return (
    <div className="bg-white">
      <div className="mt-10 bg-[#302D2D]">
        <div className="mt-10 bg-[#302D2D] text-white text-sm p-5 md:p-20 flex flex-col md:flex-row justify-between gap-10">
          <p className="max-w-md">{description}</p>

          <ul className="space-y-2">
            {links.main.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href} 
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="space-y-2">
            {links.policy.map((item, index) => (
              <li key={index}>
                {item} {/* Просто текст без ссылки */}
              </li>
            ))}

            <div className="flex gap-5 mt-5">
              {social.map((icon, index) => (
                <Link 
                  key={index} 
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className="object-contain"
                    priority
                  />
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>

      <div className="pl-[40px] pr-[40px] w-full h-[70px] bg-[#302D2D]">
        <div className="w-full h-[2px] bg-[#D4D4D4]"></div>
        <div className="text-white font-inter text-center mt-[30px]">
          {copyright}
        </div>
      </div>
    </div>
  );
}