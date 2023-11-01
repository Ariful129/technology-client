import { Link } from "react-router-dom";


const Cards = ({ products }) => {
    const { b_name, image } = products
    console.log(b_name, image)
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-2">
            <figure><img className="" src={image} alt="Shoes" /></figure>
            <div className="card-body">
               <Link to={`/brand/${b_name}`}>
               <h2 className=" text-center font-bold text-2xl">{b_name}</h2>
               </Link>
            </div>
        </div>
    );
};

export default Cards;