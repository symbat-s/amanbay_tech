import Link from 'next/link';
import Image from 'next/image';
import Banner from '@/data/BannerThree.json';

export default function PeakBannerThree() {
  return (
    <section className="min-h-screen flex items-center relative">
      {/* Фоновое изображение с Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/foto/BannerThree.png" // Замените на путь к вашему изображению
          alt="IT Partner Background"
          fill
          className="object-cover"
          priority
        />
       
      </div>

      {/* Контент */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-1/2">
          {/* Заголовок */}
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight text-center">
            Ваш IT-Партнер
          </h1>

          

          {/* Описание */}
          <p className="text-xl md:text-2xl text-black/90 mb-8 leading-relaxed text-center">
            Мы создаем цифровые решения, которые заставляют ваш бизнес работать как часы. 
            От здравоохранения до туризма, мы знаем, как сделать вас лучше.
          </p>

         
         
        </div>
      </div>
    </section>
  );
}