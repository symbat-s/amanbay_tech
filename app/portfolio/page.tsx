import Header from "../components/Header";
import Footer from "@/app/components/Footer";
import PortfolioBanner from "./components/PortfolioBanner";
import ServicesSection from "./components/ServicesSection";
export default function Portfolio() {
    return(
        <div>
            <Header />
            <PortfolioBanner />
            <ServicesSection/>
            <Footer/>
        </div>
    )
}