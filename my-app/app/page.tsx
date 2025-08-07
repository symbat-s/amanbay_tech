import Banner from "./components/Banner";
import BannerTwo from "./components/BannerTwo";
import AboutBanner from "./components/AboutSection";

export default function Home() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1536px]">
      <Banner />
      <BannerTwo />
      <AboutBanner/>
    </div>
  );
}