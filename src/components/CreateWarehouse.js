import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addWarehouse} from '../store/actions/WarehouseActions'

function CreateWarehouse({setWarehouseAddData,formErrors}) {
    const[wId, setwId]= useState("");
    const[wName, setwName]= useState("");
    const[wLocation, setwLocation]= useState("");

    
    const newWarehouse = useSelector(state=>state.warehouseReducer.newWarehouse)

    const dispatch = useDispatch();

    const navigate = useNavigate();


    useEffect(()=>{
        const payload={
            warehouseId: wId,
            warehouseName: wName,
            warehouseLocation: wLocation
        }
        setWarehouseAddData(payload)
    },[wId,wName,wLocation])

    return (
        <div className="container">
            <h2 style={{ backgroundColor: "lightblue" }}>Add Warehouse</h2>
            <div className="form-group">
                <label htmlFor='wName'>WarehouseName</label>
                <input type="text" className="form-control" name="wName" value={wName} onChange={e => setwName(e.target.value)} />
                {
                   formErrors.warehouseNameError &&
                   <div style={{color:'red'}}>{formErrors.warehouseNameError}</div> 
                }
            </div>
            <div className="form-group">
                <label htmlFor='wId'>WarehouseId </label>
                <input type="text" className="form-control" name="wId" value={wId} onChange={e => setwId(e.target.value)} />
                {
                   formErrors.warehouseIdError &&
                   <div style={{color:'red'}}>{formErrors.warehouseIdError}</div> 
                }
            </div>
            <div className="form-group">
                <label htmlFor='wLocation'>WarehouseLocation</label>
                <input type="text" className="form-control" name="wLocation" value={wLocation} onChange={e => setwLocation(e.target.value)} />
                {
                   formErrors.warehouseLocationError &&
                   <div style={{color:'red'}}>{formErrors.warehouseLocationError}</div> 
                }
            </div>
            
        </div>

    )
}

export default CreateWarehouse