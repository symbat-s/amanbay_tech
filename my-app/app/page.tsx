import Banner from "./components/Banner";
import BannerTwo from "./components/BannerTwo";
import AboutBanner from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <BannerTwo />
      <AboutBanner/>
      <Footer />
    </div>
  );
}