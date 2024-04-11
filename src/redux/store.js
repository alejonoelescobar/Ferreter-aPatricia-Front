import { configureStore } from "@reduxjs/toolkit";
import getAllReducer from "./features/getSlice";


const store = configureStore({
    reducer: { 
        getAll: getAllReducer
    }
})

export default store