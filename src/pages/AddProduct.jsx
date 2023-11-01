import Navbar from "../shared/Navbar";


const AddProduct = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const name = form.get('name');
        const image = form.get('image');
        const b_name = form.get('b_name');
        const type = form.get('type');
        const price = form.get('price')
        const description = form.get('description')
        console.log(name, image, b_name, type, price, description)

        const products = { name, image, b_name, type, price, description }

        //send data to server side 'post'
        fetch('https://technology-server-frth8nzdh-arifs-projects-daf4c8dc.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)    //-> object user
        })
            .then(res => res.json())
            .then(data => {
                //recive data form server side 
                //recive data form mangoDB
                console.log(data)
                if (data.insertedId) {
                    alert('Products Added successfully')
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




            <div className="m-4  bg-slate-200 rounded-2xl text-xl p-4">
                <h1 className="md:text-4xl font-semibold text-center p-2">ADD Product</h1>
                <form onSubmit={handleRegister} >
                    <div className="flex mx-auto md:w-3/4 gap-12">
                        <div className="w-2/4 ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Product_name.." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Product_URL.." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" name="b_name" placeholder="Name.." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <input type="text" name="type" placeholder="phone,computer.." className="input input-bordered" required />
                            </div>

                        </div>
                        <div className="w-2/4">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price.." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea type='text' name="description" placeholder="Enter description..." className="textarea textarea-bordered" required></textarea>
                            </div>


                        </div>
                    </div>
                    <div className="w-3/4 mx-auto">
                        <div className="form-control mt-6">
                            <button className="btn  bg-black text-white">Add</button>
                        </div>
                    </div>
                </form>
                {/*   <div className="form-control mt-6">
                            <button className="btn  bg-black text-white">Register</button>
                       </div> */}

            </div>


        </div>
    );
};

export default AddProduct;