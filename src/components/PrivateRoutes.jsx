import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const { userInfo, loading } = useSelector((state) => state.auth);

    useEffect(() => {
        console.log("PrivateRoutes - useEffect - user:", userInfo, "loading:", loading);
    }, [userInfo, loading]); // Add loading to dependency array

    // if (loading) {
    //     return <div>Loading...</div>; // Or a loading spinner component
    // }

    return userInfo ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoutes;
