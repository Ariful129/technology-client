import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext, useState } from "react";
import { AuthContex } from "../provider/AuthProvider";


const Login = () => {

      //From Auth API
      const {signIn,signInWithGoogle}=useContext(AuthContex)
    
      // // Error show
      const [regerror, setRegerror] = useState('')
  
      const location = useLocation();
      const navigate = useNavigate();


    const handleLogin=(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        console.log(email,password)
         
        signIn(email, password)
        .then(res => {
            console.log(res.user)
           // toast.success("LogIn successfully");
        //Navigate After Login
         navigate(location?.state ? location.state : '/login');
           
          if(!location.state){
             navigate('/')
          }
            
        })
        .catch(error => {
            console.error(error.code);
             setRegerror('Invalid email or password. Please try again.')
        })

    }
      // Google dia LOogin)
      const hadleGoogleSign=()=>{
        //(google provider(Transfer data to createUser function)
       signInWithGoogle()
       .then(res=>{
            console.log(res.user)
            navigate('/')
       })
       .catch(error =>{
          console.error(error)
       })
  }

    return (
        <div>
              <Navbar></Navbar>
            <div className="p-8">
            <div className="m-4  bg-slate-200 rounded-3xl text-xl">
                <h1 className="text-3xl font-semibold text-center p-2">Please LogIn</h1>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto ">
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
                        <a  href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white">Login</button>
                    </div>
                </form>
                <p className="text-center"><button onClick={hadleGoogleSign} className="btn btn-link md:text-xl text-orange-700">Google-Login!</button></p>
                
                {
                    regerror && <p className="text-xl text-red-700 text-center">{regerror}</p>
                } 
               

                <p className="text-center m-4">Do not have an account
                    <Link to="/register" className="text-red-400 font-bold"> Register</Link>
                </p>
               
            </div>
            </div>
        </div>
    );
};

export default Login;