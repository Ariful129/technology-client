import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContex } from "../provider/AuthProvider";
import {  useLoaderData } from "react-router-dom";
import { useState } from "react";
//import { useState } from "react";


const MyCart = () => {
    const loaded = useLoaderData();


    const { user } = useContext(AuthContex);
    const email=user.email;

     // Filter the data based on the 'b_name' property matching the 'name' parameter
     const filteredData = loaded.filter(product => product.email === email);

    //delete
    const [users,setUSers]=useState(filteredData)

        /// User Delate
    const handleDelete =(_id) =>{
        console.log('Delete', _id)
        //_id Transfer to server side 
        fetch(`https://technology-server-frth8nzdh-arifs-projects-daf4c8dc.vercel.app/addcart/${_id}`,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            //Ai jaigai Mongo theke response ase
            console.log(data)
            if(data.deletedCount>0){
                alert('Deleted Successfully')
                const remaning=users.filter(user => user._id  !==  _id);
                setUSers(remaning)
            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>
           <div className="grid grid-cols-3 gap-6">
           {
                users.map(product => (
                    <div key={product._id} >
                       
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
                                
                                    <button onClick={ ()=>handleDelete(product._id)}  className="btn bg-black text-white ">Delete</button>
                                  
                                   
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
           </div>
        </div>
    );
};

export default MyCart;