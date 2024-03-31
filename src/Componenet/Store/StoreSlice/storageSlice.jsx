import { createSlice, current } from "@reduxjs/toolkit";
const localKey = 'data'
const getStorageData = ()=>{
    const storedData = localStorage.getItem(localKey);
    return storedData ? JSON.parse(storedData) : [{
        name : '',
        email: '',
        password : ''
    }]
}
const storeData= (item)=>{
    localStorage.setItem(localKey, JSON.stringify(item))
}


const initialState = {
    data: getStorageData() 
    
}

const storageSlice = createSlice({
    name: 'store',
    initialState,
    reducers : {
        addData : (state, action)=> {
            // console.log(action.payload)
            state.data.push(action.payload); 
            console.log(current(state)) ;
            storeData(state.data)
        }
    }
});
export default storageSlice.reducer;
export const {addData} = storageSlice.actions;