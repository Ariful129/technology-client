import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext, useState } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {

    //Recive object from AuthProvider API
    const { createUser } = useContext(AuthContex);

    // Error show
    const [regerror, setRegerror] = useState('')

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const name = form.get('name');
        const number = form.get('number');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, number, email, password)

        //resetError
        setRegerror('');
        //reset success
        // setSuccess('')
        //password length check
        if (password.length < 6) {
            setRegerror('Password should at least 6')
            return;
        }
        //password uppercase check->Regular Expression
        if (!/[A-Z]/.test(password)) {
            setRegerror('password should have at least one uppercase')
            return;
        }
        //Special cha
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setRegerror('password should have at least one Special Character')
            return;
        }

        //create user
        createUser(email, password)
            .then(res => {
                console.log(res.user)
                alert('USer created succefully')
                //toast.success("User created successfully");
                //Update Profile
                updateProfile(res.user, {
                    displayName: name,

                })
                    .then(() => console.log('Profile Updated'))
                    .catch(error => console.error(error))
                //go to home page
                navigate('/')

            })
            .catch(error => {
                console.error(error);
                setRegerror(error.message)
            })

    }

    return (
        <div>
            <Navbar></Navbar>

            <div className=" p-6 ">

                <div className="m-4  bg-slate-200 rounded-2xl text-xl">
                    <h1 className="md:text-4xl font-semibold text-center p-2">Register Here</h1>
                    <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name.." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name="number" placeholder="phone..." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-black text-white">Register</button>
                        </div>
                    </form>
                    <p className="text-center m-4">Already have an account
                        <Link to="/login" className="text-red-400 font-bold"> Login</Link>
                    </p>

                    {
                        regerror && <p className="text-xl text-red-700 text-center font-semibold">{regerror}</p>
                    }

                </div>

            </div>
        </div>
    );
};

export default Register;