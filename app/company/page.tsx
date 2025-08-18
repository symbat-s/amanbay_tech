import Header from "../components/Header";
import Employee from "./components/Employees";
import Academy from "./components/WhoWeAre";

export default function Company () {
    return (
        <div>
            <Header />
            <Academy/>
            <Employee/>
        </div>
    )
}