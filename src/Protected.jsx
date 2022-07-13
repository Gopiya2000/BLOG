import React from 'react'
import jwtDecode from "jwt-decode";
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
    const isAuthenticated = localStorage.getItem("usersToken")
    if (isAuthenticated) {
        const token = jwtDecode(isAuthenticated)
        return children
    }
    else{
        console.log("back to home")
        return <Navigate to="/"/>;
    }
}

export default Protected