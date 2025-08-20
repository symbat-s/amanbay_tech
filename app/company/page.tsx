import Header from "../components/Header";
import Employee from "./components/Employees";
import WhoWeAre from "./components/WhoWeAre";
import Academy from "./components/WhoWeAre";

export default function Company () {
    return (
        <div>
            <Header />
            <WhoWeAre/>
            <Employee/>
            <Academy/>
        </div>
    )
}