import Header from "./components/Header"
import Banner from "./components/Banner";
import BannerTwo from "./components/BannerTwo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import InfoUs from "./components/InfoUs";



export default function Home() {
  return (
    <div className="bg-[white]">
      <Header />
      <Banner />
      <BannerTwo />
      <InfoUs/>
      <Founder/>
      <Contact />
      <Footer/>
    </div>
  );
} 