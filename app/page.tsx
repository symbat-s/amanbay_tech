import Header from "./components/Header"
import Banner from "./components/Banner";
import BannerTwo from "./components/BannerTwo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import InfoUs from "./components/InfoUs";
import Portfolio from "@/app/components/Portfolio";


export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <BannerTwo />
        <Portfolio />
      <InfoUs/>
      <Founder/>
      <Contact />
      <Footer/>
    </div>
  );
} 