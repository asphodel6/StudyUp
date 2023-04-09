import {combineReducers, legacy_createStore as createStore} from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    auth: authReducer
});

let store = createStore(reducers);

export default store;