import BannerOut  from "./BannerOut"
import ServiceOut from "./ServiceOut"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientOut from "./ClientsOut";
import StratUpOut from "./StartUpOut";
export default function () {
    return(
        <div>
            <Header/>
            <BannerOut/>
            <ServiceOut/>
            <ClientOut/>
            <StratUpOut/>
            <Footer/>
        </div>
    )
}