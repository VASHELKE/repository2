import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Logout(props) {

    const myUser = localStorage.getItem("myUser");
    const navigate = useNavigate();

    useEffect(()=> {
        if(myUser!==null) {
            localStorage.removeItem("myUser");
            alert("You have logged out succssfully!");
            navigate('/')
        }
    })
   

    return (
        <div>
            
        </div>
    )
}
export default Logout;