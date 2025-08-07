import Banner from "./components/Banner";
import BannerTwo from "./components/BannerTwo";
import AboutBanner from "./components/AboutSection";
import Question from "./components/Question";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <BannerTwo />
      <AboutBanner/>
      <Question/>
      <Contact/>
    </div>
  );
}