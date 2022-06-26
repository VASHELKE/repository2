import axios from "axios"


export function addWarehouse(warehouse) {

    return (dispatch) => {
        return axios.post("http://localhost:8080/warehouse/save", warehouse).then(
            resp => {
                dispatch(addWarehouseSuccess(resp.data));
            }
        )       
    }
}

export function addWarehouseSuccess(data) {
    return {
        type: 'WAREHOUSE/ADDSUCCESS',
        payload: data
    }
}

export function getAllWarehouse() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/warehouse/all").then(
            resp => {
                dispatch(getAllWarehouseSuccess(resp.data));
            }
        )       
    }
}

export function getAllWarehouseSuccess(data) {
    return {
        type: "WAREHOUSE/GETALL",
        payload: data
    }
}

export function getWarehouseById(id) {
   
    return (dispatch) => {
        return axios.get("http://localhost:8080/warehouse/findbyid/" + id).then(resp => {
            console.log(resp.status);
            console.log("id123...",id);
            dispatch(getWarehouseByIdSuccess(resp.data))
        })
    }
}

export function getWarehouseByIdSuccess(data) {
    return {
        type: "WAREHOUSE/GETBYID",
        payload: data
    }
}

export function getWarehouseByName(name) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/warehouse/findbyname/" + name).then(resp => {
            console.log(resp.status);
            console.log("name...",name);
            dispatch(getWarehouseByNameSuccess(resp.data))
        })
    }
}

export function getWarehouseByNameSuccess(data) {
    return {
        type: "WAREHOUSE/GETBYNAME",
        payload: data
    }
}

export function getWarehouseByLocation(location) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/warehouse/findbylocation/" + location).then(resp => {
            console.log(resp.status);
            console.log("location...",location);
            dispatch(getWarehouseByLocationSuccess(resp.data))
        })
    }
}

export function getWarehouseByLocationSuccess(data) {
    return {
        type: "PRODUCT/GETBYLOCATION",
        payload: data
    }
}


export function updateWarehouse(warehouse) {

    return (dispatch) => {
        return axios.put("http://localhost:8080/warehouse/update", warehouse).then(
            resp => {
                dispatch(updateWarehouseSuccess(resp.data));
            }
        )       
    }
}

export function updateWarehouseSuccess(data) {
    return {
        type: 'WAREHOUSE/UPDATESUCCESS',
        payload: data
    }
}

export function deleteWarehouse(id){
    return(dispatch)=>{
        return axios.delete("http://localhost:8080/warehouse/delete/"+id).then(resp=>{
            console.log("delete resp...",resp)
            dispatch(deleteWarehouseSuccess(resp.data));
        }
        )
    }
}

export function deleteWarehouseSuccess(data){
    return{
        type:'WAREHOUSE/DELETESUCESS',
        payload: data
    }
}