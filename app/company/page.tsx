import Header from "../components/Header";
import Employee from "./components/Employees";
import Swing from "./components/Swing";
import Academy from "./components/WhoWeAre";

export default function Company () {
    return (
        <div className="bg-white">
            <Header />
            <Academy/>
            <Employee/>
            <Swing  />
        </div>
    )
}