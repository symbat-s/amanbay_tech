import Header from "../components/Header";
import PeakBanner from "./components/PeakBanner";
import WebBanner from "./components/WebBanner";
import MobileBanner from "./components/MobileBanner";
import DevOpsBanner from "./components/DevOpsBanner";
import InfrastructureBanner from "./components/InfrastructureBanner";
import ProcessBanner from "./components/ProcessBanner";
import Footer from "../components/Footer";
export default function Service () {
    return (
        <div>
            <Header />
           <PeakBanner/>
           <WebBanner/>
           <MobileBanner/>
           <DevOpsBanner/>
           <InfrastructureBanner/>
           <ProcessBanner/>
           <Footer/>
        </div>
    )
}