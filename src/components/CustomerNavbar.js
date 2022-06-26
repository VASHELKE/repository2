import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function CustomerNavBar() {

    const navigate = useNavigate();

    const doLogout = () => {
        const myUser = localStorage.getItem("myUser");
        if (myUser !== null) {
            localStorage.removeItem("myUser");
            alert("You have logged out succssfully!");
            navigate('/')
        }
    }

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <Link className="navbar-brand" to="#">Logo</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/product/all">warehouses</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">AboutUs</Link>
                </li>
                {
                    <li className="nav-item">
                        
                        <button onClick={doLogout}>Logout</button>
                    </li>
                }
            </ul>
        </nav>
    )
}

export default CustomerNavBar;