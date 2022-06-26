import React, { useEffect } from 'react';
import CustomerNavBar from './CustomerNavbar';

function CustomerDashboard() {

    const myUser = localStorage.getItem("myUser");
   
    return (
        <div>
            {myUser !== null ?
                <div>
                    <CustomerNavBar/>
                    <h4>Welcome {JSON.parse(myUser).customerName}</h4>
                    <h2>Customer DashBoard</h2>       


                </div>
                : <h2>Please Login</h2>
            }

        </div>
    )

}

export default CustomerDashboard;