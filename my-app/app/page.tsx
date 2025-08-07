import Header from "./components/Header"
import Banner from "./components/Banner";
import BannerTwo from "./components/BannerTwo";
import AboutBanner from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <BannerTwo />
      <AboutBanner/>
      <Footer />
    </div>
  );
} 