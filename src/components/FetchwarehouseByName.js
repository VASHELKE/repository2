import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getWarehouseByName } from '../store/actions/WarehouseActions';


function FetchWarehouseByName() {

  
    const warehouse = useSelector(state => state.warehouseReducer.warehouse)

    const { name } = useParams();

    const dispatch = useDispatch();

    const fetchwarehouseByName = () => {
        dispatch(getWarehouseByName(name));
    }

    useEffect(fetchwarehouseByName, [name]);

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

                        {console.log("warehouse777...",warehouse)}
                        
                        <Link to={`/warehouse/edit/${warehouse.warehouseName}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp;
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

export default FetchWarehouseByName;