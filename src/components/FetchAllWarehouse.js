import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getAllWarehouse } from '../store/actions/WarehouseActions';

function FetchAllWarehouse() {

    const warehouses = useSelector(state=>state.warehouseReducer.warehouses)
    console.log("warehouses....",warehouses)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myUser = localStorage.getItem("myUser");

    const myFunction = () => {
        dispatch(getAllWarehouse()) 
    };
   
    useEffect(()=> {
        myFunction();
    },[]);

    return (
        <div>
            { 
                 myUser !== null &&  <h3>Welcome {JSON.parse(myUser).customerName}</h3>
            }
            <div class="row">
                {
                    warehouses?.map((w, index) =>
                        <div key={index} className="col-sm-3">
                            <Link to={`warehouse/findbyid/${w.warehouseId}`}>
                                <div className="card" style={{ width: "200px", height: "400px" }}>
                                   
                                    <div className="card-body">
                                        <h4 className="card-title">{w.warehouseName}</h4>
                                        <p className="card-text">{w.warehousePrice}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
            <div style={{ float: "right" }}>
                
                <button onClick={()=>navigate(-1)} className="btn btn-secondary">Go Back Home</button>
            </div>
        </div>
    )
}

export default FetchAllWarehouse;