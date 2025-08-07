import Banner from "./components/Banner";
import BannerTwo from "./components/BannerTwo";
import AboutBanner from "./components/AboutSection";
import Question from "./components/Question";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <BannerTwo />
      <AboutBanner/>
      <Question/>
    </div>
  );
}