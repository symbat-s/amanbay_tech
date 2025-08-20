import Header from "../components/Header";
import WhoWeAre from "./components/WhoWeAre";
import Employee from "./components/Employees";
import Swing from "./components/Swing";
import Academy from "./components/Academy";
import Footer from "../components/Footer";

export default function Company () {
    return (
        <div>
            <Header />
            <WhoWeAre/>
            <Employee/>
            <Academy/>
            <Swing  />
            <Footer/>
        </div>
    )
}