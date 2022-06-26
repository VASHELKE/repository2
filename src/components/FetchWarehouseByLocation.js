import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getWarehouseByLocation } from '../store/actions/WarehouseActions';


function FetchWarehouseByLocation() {

  
    const warehouse = useSelector(state => state.warehouseReducer.warehouse)
    console.log("warehouse888",warehouse)

    const { location } = useParams();

    const dispatch = useDispatch();

    const fetchwarehouseByLocation = () => {
        dispatch(getWarehouseByLocation(location));
    }

    useEffect(fetchwarehouseByLocation, [location]);

    const deleteWarehouse = () => {

    }
    
    return (
        <div className='contrainer-fluid'>
            {
                warehouse !== null &&
                <div className="row">
                   
                    <div className="col">
                        <h2>warehouse details</h2>
                        <p>WarehouseId : {warehouse.warehouseId}</p>
                        <p>WarehouseName : {warehouse.warehouseName}</p>
                        <p>WarehouseLocation : {warehouse.warehouseLocation}</p>

                        {console.log("warehouse999...",warehouse)}
                        
                        <Link to={`/warehouse/edit/${warehouse.warehouseLocation}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp;
                        <button onClick={deleteWarehouse} className="btn btn-secondary">Delete</button><br></br><br></br>
                    </div>
                </div>
            }

            <div>
                <Link to="/warehouse/all" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    )
}

export default FetchWarehouseByLocation;