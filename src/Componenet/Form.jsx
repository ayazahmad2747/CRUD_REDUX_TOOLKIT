import React, { useState } from 'react'
import './Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from './Store/StoreSlice/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Form = () => {

    const faDeleteIcon = <FontAwesomeIcon icon={faTrash} />
    const faEditIcon = <FontAwesomeIcon icon={faPenToSquare} />
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [toggle, setToggle] = useState(true);
    const [editindex, setEditIndex] = useState(null)
    const dispatch = useDispatch();
    const formdata = useSelector((state)=> state.form.value);
    

        const inputHandle = (e)=>{
            const name = e.target.name;
            const value = e.target.value;
            setData((preValue)=>{
                return {
                    ...preValue,
                    [name] : value
                }
            })
        }
        
        const submitData = (e)=>{
            e.preventDefault();
            const ayazData = {
              name: data.name,
              email: data.email,
              phone: data.phone
            };
            if (!data.name || !data.email || !data.phone) {
              // Handle empty data case, for example:
              alert("Please fill the form first");
              return; // Prevent further execution
          }
            if(toggle){
              dispatch(addData(data));
            setData({name: '', email: '',phone: ''})
            
            }
            else if(!toggle){
              dispatch(updateData({ayazData, editindex}));
              setToggle(true);
              setData({
                name: '',
                email: '',
                phone: '',
                
              })
            }
        }
            
        const editHandle = (index)=>{
          const returnData = formdata[index]
          setData({
            name : returnData.name,
            email : returnData.email,
            phone: returnData.phone
          })
          setToggle(false);
          setEditIndex(index)
          
        }
        
  return (
    <div className='container'>
      <div className="heading">
      <h1>Redux Toolkit</h1>

      
      </div>
      <div className="form">
        <div className="form-data">
        <h4 className='form-heading'>Form Data</h4>
        <form action="" className='form-sec'>
        <input type="text" placeholder='Enter Name'  className='form-input'
        name='name' value={data.name }   onChange={inputHandle} required/>
        <input type="email" placeholder='Enter Email' className='form-input'  
        name='email' value={data.email}  onChange={inputHandle} required />
        <input type="text" placeholder='Enter Phone' className='form-input'
        name='phone' value={data.phone} onChange={inputHandle} required  />
        
          <button className='form-btn' onClick={submitData}> 
          {toggle? 'Add Data' : 'Update Data'}
          </button>
          
        </form>
        </div>
        <div className="information-data">
            <div className="information-heading">
            <h4 className='record'>INFORMATION RECORDS</h4>
            </div>
            <div className="table-section">
            <table className='table-data'>
            <thead className='table-head'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                
            </thead>
            <tbody>
            { formdata.map((val,index)=>(
                <tr key={index}>
                <td>{val.name} </td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>
                <button className='icon' onClick={()=>{dispatch(deleteData(index))}}>{faDeleteIcon}</button>
                <button className='edit' onClick={()=>editHandle(index)}>{faEditIcon}</button>
                </td>
                </tr>
            ))}
            </tbody>
            </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Form;
