import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <div>
             <Banner></Banner>
             <br />
             <div>
                <h1 className="text-center text-7xl font-Playwrite text-green-600 ">Let's Buy</h1>
             </div>
            </div>
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Home;