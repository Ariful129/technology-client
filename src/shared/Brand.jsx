import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from './Navbar';

const Brand = () => {
    const { name } = useParams();
    const loaded = useLoaderData();

    // Filter the data based on the 'b_name' property matching the 'name' parameter
    const filteredData = loaded.filter(product => product.b_name === name);
    
    


    return (
        <div>
            <Navbar></Navbar>
            <div className="relative w-full h-full mb-14">

                {/* Move the text and input div inside the slider */}
                <AwesomeSlider className='h-[550px] '>
                    <div className="w-full h-full relative  ">
                        <img
                            src="https://i.ibb.co/cDz9tZM/electronic-device-balancing-concept.jpg"
                            alt=""
                            className="w-full h-full object-cover "
                        />


                    </div>
                    <div className="w-full h-full relative  ">
                        <img
                            src="https://i.ibb.co/zFVNTvp/stock-photo-full-body-photo-of-attractive-young-guy-hold-gadget-sit-white-cube-apple-samsung-wear-tr.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />


                    </div>
                    <div className="w-full h-full relative  ">
                        <img
                            src="https://i.ibb.co/cDz9tZM/electronic-device-balancing-concept.jpg"
                            alt=""
                            className="w-full h-full object-cover "
                        />


                    </div>

                    {/* Add more slides as needed */}
                </AwesomeSlider>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredData.map(product => (
                    <div key={product._id}>


                        <div className="card  bg-base-200 shadow-xl">
                            <figure className="w-full h-[220px]">
                                <img src={product.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.b_name}</h2>
                                <h2 className="card-title">{product.name}</h2>
                                <h2 className="card-title">{product.type}</h2>
                                <h2 className="card-title">{product.price}</h2>
                                <p>{product.description}</p>
                                <div className="card-actions">
                                  <Link to={`/detail/${product._id}`}>
                                    <button className="btn bg-black text-white ">Details button</button>
                                  </Link>
                                    <button className="btn  bg-black text-white">Update button</button>
                                </div>
                            </div>
                        </div>



                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brand;

