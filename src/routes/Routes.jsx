import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../shared/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import PrivateRoutes from "./PrivateRoutes";
import Brand from "../shared/Brand";
import Detail from "../shared/Detail";
import MyCart from "../shared/MyCart";




const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/products')
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }, 
            {
                path:'/addproduct',
                element:<PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path:'/brand/:name',
                element:<Brand></Brand>,
                loader:()=> fetch('http://localhost:5000/products')
            },
            {
                path:'/detail/:id',
                element:<PrivateRoutes><Detail></Detail></PrivateRoutes>,
                loader:()=> fetch('http://localhost:5000/products')
            },
            {
                path:'/mycart',
                element:<PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader:()=> fetch('http://localhost:5000/addcart')
            }
        ]
    }
])
export default router;