import { combineReducers } from "redux";

import counterReducer from './CounterReducer';
import warehouseReducer from "./WarehouseReducer";
import authenticationReducer from "./AuthenticationReducer";

const rootReducer = combineReducers({
    counterReducer,
    warehouseReducer,
    authenticationReducer
})

export default rootReducer;