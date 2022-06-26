import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateWarehouse } from '../store/actions/WarehouseActions';
import {getWarehouseById} from '../store/actions/WarehouseActions';


function EditWarehouse({warehouseEditId, setWarehouseEditData}) {
    console.log("warehouseEditId....",warehouseEditId)
    const [editedObject,setEditedObject] = useState()
    console.log("edited object....",editedObject)
    const warehouse = useSelector(state => state?.warehouseReducer?.warehouses);
    console.log("warehouse in edit...",warehouse)
    const navigate = useNavigate();
    const dispatch = useDispatch();

   
    const [wName, setWName] = useState(warehouse.warehouseName);
    const [wLocation, setWLocation] = useState(warehouse.warehouseLocation);

    useEffect(()=>{
      const editedData =  warehouse?.filter((data)=> data.warehouseId === warehouseEditId)
      setEditedObject(editedData[0])
      console.log("editedData/////////",editedData)
    },[warehouseEditId])

    useEffect(()=>{
        setWarehouseEditData(editedObject)
    },[editedObject])

    const handleSubmit = () => {

        const payload = {
            // warehouseId : wId,
           warehouseName: wName,
            warehouseLocation: wLocation,
            
        }

        dispatch(updateWarehouse(payload));
        alert("warehouse Updated.");
        navigate(-1);
    }

    return (
        <div>
            <div className="container">
                
                <div className="form-group">
                    <label htmlFor='wName'>warehouseName</label>
                    <input type="text" className="form-control" name="wName" value={editedObject?.warehouseName} onChange={e => setEditedObject({...editedObject, warehouseName: e.target.value}) } />

                </div>
                <div className="form-group">
                    <label htmlFor='wLocation'>warehouselocation </label>
                    <input type="text" className="form-control" name="wLocation" value={editedObject?.warehouseLocation} onChange={e => setEditedObject({...editedObject, warehouseLocation: e.target.value})} />

                </div>
                
               
            </div>
        </div>
    )
}

export default EditWarehouse;