import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContex);

    //go to location(Ami jei tai jete chai)
    const location = useLocation();
    console.log(location.pathname)

    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;