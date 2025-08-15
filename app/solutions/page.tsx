import BannerSolution from './components/BannerSolution';
import Header from "../components/Header";
import Healthcare from './components/Healthcare';
import Problem from './components/Problem';
import Footer from '../components/Footer';
export default function SolutionPage() {
    return(
        <div>
            <Header />
            <BannerSolution />
            <Healthcare/>
            <Problem />
            <Footer/>
        </div>
    )
}