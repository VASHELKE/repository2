const initialState = {
    warehouses: [],
    warehouse : null,
    newwarehouse : null,
    updateWarehouse : null
}

export default function warehouseReducer(state = initialState, action) {

    if (action.type === 'WAREHOUSE/ADDSUCCESS') {
        console.log(action.payload);
        return ({
            ...state,
            warehouse: action.payload
        })
    }
    if (action.type === 'WAREHOUSE/GETALL') {
        console.log(action.payload);
        return ({
            ...state,
            warehouses: action.payload
        })
    }
    if (action.type === 'WAREHOUSE/GETBYNAME') {
        console.log(action.payload);
        return ({
            ...state,
            warehouse: action.payload
        })
    }
    if (action.type === 'WAREHOUSE/GETBYLOCATION') {
        console.log(action.payload);
        return ({
            ...state,
            warehouse: action.payload
        })
    }
    
    if (action.type === 'WAREHOUSE/GETBYID') {
        console.log(action.payload);
        return ({
            ...state,
            warehouse: action.payload
        })
    }
    if (action.type === 'WAREHOUSE/UPDATESUCCESS') {
        console.log(action.payload);
        return ({
            ...state,
            updateWarehouse: action.payload
        })
    }
    if (action.type === 'WAREHOUSE/DELETESUCESS') {
        console.log(action.payload);
        return ({
            ...state,
            updateWarehouse: action.payload
        })
    }
    
    else {
        return state;
    }
}