
import { createSlice } from "@reduxjs/toolkit";



const localStorageKey = 'formdata';

const getStoredData = ()=>{
    const storedData = localStorage.getItem(localStorageKey);
    return storedData ? JSON.parse(storedData): [];
}

const storeData= (data)=>{
    localStorage.setItem(localStorageKey, JSON.stringify(data))
}

const initialState = {
    value : getStoredData()
}
const FormSlice = createSlice({
    name : 'form',
    initialState,
    reducers : {
        addData : (state, action)=> {
            state.value.push(action.payload);
            storeData(state.value)
            
        },
        deleteData: (state, action)=> {
          state.value = state.value.filter((item,index)=>{
                return index !== action.payload;
            })
            storeData(state.value)
        },
        updateData : (state,action)=> {
           const {ayazData, editindex} = action.payload;
           state.value= state.value.map((item,i)=>{
            if(i==editindex){
                return ayazData
            }else{
                return item
            }
            
        })  
        }
    }
    
})
export default FormSlice.reducer;
export const {addData, deleteData,updateData} = FormSlice.actions;