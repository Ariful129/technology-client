import { useLoaderData } from "react-router-dom";
import Banner from "../shared/Banner";
import Cards from "../shared/Cards";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";



const Home = () => {
    const loadedproducts=useLoaderData();


    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <Brand></Brand> */}
            <h1 className="mt-20 text-center text-2xl font-semibold bg-black text-white p-4 rounded-xl">All available Products Here</h1>
            <div className=" mb-2 grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    loadedproducts.map(products => <Cards key={products._id} products={products}></Cards>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;