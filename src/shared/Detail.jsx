import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";


const Detail = () => {
    const { id } = useParams();
    const loaded = useLoaderData();
 
    const { user } = useContext(AuthContex);
   
    // Filter the data based on the 'b_name' property matching the 'name' parameter
    const filteredData = loaded.filter(product => product._id === id);
   
    const id1=filteredData[0]._id;
    const image=filteredData[0].image;
    const b_name=filteredData[0].b_name;
    const type=filteredData[0].type;
    const price=filteredData[0].price;
    const email=user.email;
    const addCart={id1,image,b_name,type,price,email}

    const handleAddcart=()=>{
        
        // //send data to server side 'post'
        fetch('https://technology-server-frth8nzdh-arifs-projects-daf4c8dc.vercel.app/addcart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCart)    //-> object user
        })
            .then(res => res.json())
            .then(data => {
                //recive data form server side 
                //recive data form mangoDB
                console.log(data)
                if (data.insertedId) {
                    alert('Add to Cart')
                    // //SweetAlert
                    // Swal.fire({
                    //   title: 'Success!',
                    //   text: 'Added Successfully',
                    //   icon: 'success',
                    //   confirmButtonText: 'Cool'
                    // })
                    //form.reset();
                }
            })
        

    }

  


    return (
        <div>
            <Navbar></Navbar>

            {filteredData.map(product => (
                    <div key={product._id}>


                        <div className="card  bg-base-200 shadow-xl">
                            <figure className="w-full h-[250px]">
                                <img  src={product.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.b_name}</h2>
                                <h2 className="card-title">{product.name}</h2>
                                <h2 className="card-title">{product.type}</h2>
                                <h2 className="card-title">{product.price}</h2>
                                <p>{product.description}</p>
                                <div className="card-actions">
                                  <Link >
                                    <button onClick={handleAddcart} className="btn bg-black text-white ">Add to Cart</button>
                                  </Link>
                                   
                                </div>
                            </div>
                        </div>



                    </div>
                ))}
        </div>
    );
};

export default Detail;