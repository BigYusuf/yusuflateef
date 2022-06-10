import React from 'react'
import {Navigate} from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoute = ({ children }) => {
    const {RealUser} = useUserAuth();
    if(!RealUser){
        return <Navigate to ='/' />; 
    }
    return children
};

export default ProtectedRoute;