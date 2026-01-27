import React from "react";
import { Link, useNavigate } from 'react-router-dom';
export const Navbar = () => {
    // let navigate = useNavigate();    
    return (
        <div>
            <h1>NAVBAR</h1>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/profile"> Profile </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    );
};