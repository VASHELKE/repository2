import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getWarehouseById } from '../store/actions/WarehouseActions';

function FetchWarehouseById({warehouseIdData,formErrors}) {

  
    const warehouse = useSelector(state => state.warehouseReducer.warehouse)
    // const warehouseId=useState()
    console.log("warehouse666...",warehouse)
    // console.log("warehouseId666...",warehouseId)
    const myUser = localStorage.getItem("myUser");
    
    const { id } = useParams();
    console.log("id")

    const dispatch = useDispatch();

    const fetchwarehouseById = () => {
        dispatch(getWarehouseById(id));
    }

    useEffect(fetchwarehouseById, [id]);

    const deleteWarehouse = () => {
      dispatch(deleteWarehouse(id));
    }
    useEffect(deleteWarehouse,[id]);
     return (
        <div className='contrainer-fluid'>
            {
                warehouse !== null && <h3>Welcome {JSON.parse(myUser).customerName}</h3>
            }
                <div className="row">
                   
                    <div className="col">
                        <h2>warehouse details</h2>
                        <p>WarehouseId : {warehouse.warehouseId}</p>
                        <p>WarehouseName : {warehouse.warehouseName}</p>
                        <p>WarehouseLocation : {warehouse.warehouseLocation}</p>

                        {console.log("warehouse777...",warehouse)}
                        
                        <Link to={`/warehouse/edit/${warehouse.warehouseId}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp;
                        <button onClick={deleteWarehouse} className="btn btn-secondary">Delete</button><br></br><br></br>
                    </div>
                </div>
            

            <div>
                <Link to="/warehouse/all" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    )
}

export default FetchWarehouseById;