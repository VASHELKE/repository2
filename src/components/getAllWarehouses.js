import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Button, Table, Modal } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllWarehouse, updateWarehouse, deleteWarehouse } from '../store/actions/WarehouseActions';
import CreateWarehouse from './CreateWarehouse';
import { addWarehouse,getWarehouseById} from '../store/actions/WarehouseActions';
import FetchWarehouseById from './FetchWarehouseById';
import EditWarehouse from './EditWarehouse';


const GetAllWareHouses = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [warehouseEditId, setWarehouseEditId]=useState()
console.log("warehouseEditId1",warehouseEditId)

  const [warehouseAddData, setWarehouseAddData]= useState()
  const [warehouseEditData,setWarehouseEditData] = useState()
  console.log("warehouseAddData.............",warehouseAddData)
  console.log("ware house edit data /////",warehouseEditData)

  const deleteWarehouseById = (id) => {
    dispatch(deleteWarehouse(id))
    refetchWarehouse()
   
  }

  const editWarehouse = (warehouseId) =>{
    setIsEditModalVisible(true)
    setWarehouseEditId(warehouseId)
  }
  
const columns = [
  {
    title: 'Warehouse Id',
    dataIndex: 'warehouseId',
  },
  {
    title: 'Warehouse Name',
    dataIndex: 'warehouseName',
  },
  {
    title: 'Warehouse Location',
    dataIndex: 'warehouseLocation',
  },
  {
    title:'Assets',
    render: (text, record) => (
      record?.assets?.length > 0 ?
      record?.assets?.reduce(function (a, b) {
        return (a.assetName || a) + ", " + b.assetName}
    )
      :
      <span>No Assets available</span>
    )
    
},
{
  title : 'Action',
  render: (row) => (
    <>
    <Button type="primary" onClick={()=>deleteWarehouseById(row.warehouseId)}>Delete</Button>
    <Button style={{marginLeft:'10px'}} onClick={()=>editWarehouse(row.warehouseId)}  type="primary">Edit</Button>
   
    </>

  )
}

  
];

  const warehouses = useSelector(state=>state.warehouseReducer.warehouses)
  const warehouse=useSelector(state=>state.warehouseReducer.warehouse)
 
  const [warehouseData, setWarehouseData] = useState(warehouses)
  const[warehouseIdData,setWarehouseIdData]=useState(warehouses)
  
    console.log("warehouses....",warehouses)
    console.log("warehouseIddata",warehouseIdData)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myUser = localStorage.getItem("myUser");

    const refetchWarehouse = () => {
        dispatch(getAllWarehouse()) 
    };
   
    useEffect(()=>{
      setWarehouseData(warehouses)
    },[warehouses])

    useEffect(()=> {
        refetchWarehouse();
    },[]);



    const handleOk = () => {
     let errors = {};
     const noErrors = Object.keys(errors).length === 0;
     dispatch(addWarehouse(warehouseAddData));
      setIsModalVisible(false)
      refetchWarehouse()
      }

      const handleCancel = () => {
      setIsModalVisible(false);
       };


    const handleEditCancel = () =>{
      setIsEditModalVisible(false);
    }
     const handleEditOk = () =>{
      dispatch(updateWarehouse(warehouseEditData))
      setIsEditModalVisible(false)
      refetchWarehouse()
      
    }
    const callSearchById=()=>{
      return(
        <FetchWarehouseById warehouseIdData={setWarehouseIdData} formErrors={formErrors}/>
      )
    }
    
  
    
  return (


      <div style={{marginTop:'20px'}}>
        <div style={{float:'left', paddingLeft:'20px'}}>
        {/* <select id="callType"  >
                <option value="SearchById" href="/FetchWarehouseById">SearchById</option>
                <option value="SearchByName" href="#">SearchByName</option>
                <option value="SearchByLocation"href="#">SearchByLocation</option>
                </select>
                <input type="text" class="form-control" id="usr"/>
                <Button type="primary" >Search</Button> */}
           {/* <Button type="primary" onClick={callSearchById}>Search Warehousebyid</Button> */}
         
          {/* <FetchWarehouseById warehouseIdData={setWarehouseIdData} formErrors={formErrors}/> */}
        </div>
        <div style={{float:'right', marginRight:'20px'}}>
         <Button type="primary" onClick={()=>setIsModalVisible(true)}>Add Warehouse</Button>
        </div>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <CreateWarehouse setWarehouseAddData={setWarehouseAddData} formErrors={formErrors}/>
      </Modal>
      <Modal visible={isEditModalVisible} onOk={handleEditOk} onCancel={handleEditCancel}>
          <EditWarehouse  warehouseEditId = {warehouseEditId} setWarehouseEditData={setWarehouseEditData}/>
      </Modal>
        <Table
      pagination={{ pageSizeOptions: ["5", "10", "15", "15"], pageSize:6, defaultPageSize: 6 }} 
      columns={columns} dataSource={warehouses} />
    </div>
  );
};

export default GetAllWareHouses;