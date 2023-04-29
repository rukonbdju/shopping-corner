import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/Auth/useAuth';

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation()
    if(!user){   
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    if(loading){
        return <div>Loading...</div>
    }
    return children;
};

export default PrivateRoute;