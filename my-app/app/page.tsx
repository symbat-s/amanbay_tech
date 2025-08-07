import Header from "./components/Header"
import Banner from "./components/Banner";
import AboutBanner from "./components/AboutSection";
import BannerTwo from "./components/BannerTwo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutBanner/>
      <BannerTwo />
      <Footer />
    </div>
  );
} 