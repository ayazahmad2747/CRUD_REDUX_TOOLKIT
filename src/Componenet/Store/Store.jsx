import { configureStore } from "@reduxjs/toolkit";
import FormSlice from './StoreSlice/Form'
import storageSlice from "./StoreSlice/storageSlice";
const Store = configureStore({
    reducer:{
        form : FormSlice,
        store : storageSlice
    }
});
export default Store;