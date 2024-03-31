import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Verification.css'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../StoreSlice/storageSlice'
import { toast } from 'react-toastify'
import Aos from 'aos'
import 'aos/dist/aos.css';
const SignUp = () => {
  const navigate=useNavigate()
  const [item, setItems] = useState({
    name : '',
    email : '',
    password : ''
  })
    const store = useSelector((state)=>state.store.data);
    const dispatch = useDispatch()


  const handleItem = (e)=>{
  const {name, value} = e.target
  setItems((preVal)=>{
  return {
    ...preVal,
    [name] : value
  }
  })
  }

  // console.log(item.name);
  const submitData = (e)=>{
    e.preventDefault();
    if (!item.name || !item.email || !item.password) {
      // Handle empty data case, for example:
      toast("Please fill the form first");
      return; // Prevent further execution
  }
  else {
    dispatch(addData(item));
    setItems({
      name: '',
      email: '',
      password: ''
    })
    navigate('/signin')
  }
   
  }
  // console.log(item.name)
  useEffect(()=>{
    Aos.init({duration: "2000"})
  }, [])
  return (
    <div className='s_container'>
    <div className="s_box" data-aos="fade-down">
    <h2 className='s_heading'>Sign Up</h2>
    <input type="text" name='name' value={item.name} placeholder='Your Name' className='s_input' onChange={handleItem} />
    <input type="email" name='email' value={item.email} placeholder='Your Email' className='s_input' onChange={handleItem} />
    
    <input type="password" name='password'  value={item.password} placeholder='Your Password' className='s_input' onChange={handleItem}  />
    <label htmlFor="" className='label'>
    <input type="checkbox" className='s_check' />
    Remember Me
    </label>
    <button className='s_btn' onClick={submitData}>Submit</button>
    <p className='s_para'>Already have an account <NavLink to= '/signIn' className="navlink"> SignIn</NavLink></p>
    </div>
    </div>
  )
}

export default SignUp;
