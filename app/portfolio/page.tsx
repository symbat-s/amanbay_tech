import Header from "../components/Header";
import Footer from "@/app/components/Footer";
import PortfolioBanner from "@/app/portfolio/components/PortfolioBanner";
import ServicesSection from "@/app/portfolio/components/ServicesSection";
export default function Portfolio() {
    return(
        <div>
            <Header />
            <PortfolioBanner />
            <ServicesSection />
            <Footer/>
        </div>
    )
}