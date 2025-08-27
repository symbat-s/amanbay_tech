import Link from "next/link"
export default function BannerOut () {
    return(
        <div className="relative w-full h-screen overflow-hidden"> 
         <div >
           <video
             autoPlay
             muted
             loop
             playsInline
             className="absolute top-1/2 h-100 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 brightness-100 z-0">
            <source src="foto/OfficeOut.mp4" type="video/mp4" />
           </video>
         </div> 

           <div className="absolute mt-50 ml-60 inset-0 bg-black/40 w-280 h-50 z-10 text-center">
             <h1 className="sm:text-4xl md:text-6xl text-white font-semibold">IT-аутсорсинг для вашего бизнеса</h1>
             <h1 className="mt-10 sm:text-2xl md:text-4xl text-white font-semibold">Мы превращаем ваши идеи в готовые проекты</h1>
           </div>
      
         <Link href="/service">
          <button className="w-50 mt-115 ml-170 h-15 absolute z-10 inset-0 bg-black/40 rounded-4xl border-1 border-white hover:bg-white/10 text-white hover:text-black">
            Подробнее
            
          </button>
        </Link>

        

        </div>
    )
}