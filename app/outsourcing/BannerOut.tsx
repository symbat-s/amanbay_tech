import Link from "next/link"

export default function BannerOut() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      <div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 brightness-100 z-0"
        >
          <source src="foto/OfficeOut.mp4" type="video/mp4" />
        </video>
      </div>

     
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-2xl sm:text-4xl md:text-6xl text-white font-semibold max-w-4xl">
          IT-аутсорсинг для вашего бизнеса
        </h1>
        <h2 className="mt-4 text-lg sm:text-2xl md:text-4xl text-white font-semibold max-w-3xl">
          Мы превращаем ваши идеи в готовые проекты
        </h2>

    
        <Link href="/service">
          <button className="mt-8 px-6 py-3 sm:px-10 sm:py-4 bg-black/40 rounded-3xl border border-white hover:bg-white/10 text-white hover:text-black text-sm sm:text-lg">
            Подробнее
          </button>
        </Link>
      </div>
    </div>
  );
}
