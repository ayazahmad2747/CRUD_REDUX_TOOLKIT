import React, { useEffect, useState } from 'react'
import './Verification.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Aos from 'aos'
import 'aos/dist/aos.css';
const SignIn = () => {
const [inputVal, setInputVal] = useState({
  email : '',
  password : ''
})
  const nevigate = useNavigate();
 const data = useSelector((state)=> state.store.data)
 console.log(data);
  const getInput= (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputVal((preVal)=>{
          return {
            ...preVal,
            [name] : value
          }
    })

  }

  const onSubmit = ()=>{
    if(inputVal.email !== '' && inputVal.password !== ''){
      data.map((elm,index)=>{
        if(elm.email=== inputVal.email && elm.password === inputVal.password){
          toast('Most Welcome to my Portal')
          nevigate('/app')
        } 
      });
      
    }
    else {
      toast('please Enter Email and Password')
    } 
    setInputVal({
      email : '',
      password : ''
    })
  }

  useEffect(()=>{
    Aos.init({duration: "2000"})
  }, [])
  return (
    <div className='s_container'>
    <div className="s_box" data-aos="fade-down">
    <h2 className='s_heading'>Sign In</h2>
    <input type="email" name='email' value={inputVal.email} placeholder='Your Email'
     className=' s_input input' onChange={getInput} />
    <input type="password" name='password' value={inputVal.password} placeholder='Your Password' 
    className=' s_input input' onChange={getInput} />
    
    <button className='s_btn i_btn' onClick={onSubmit}>Submit</button>
    <p className='s_para para'>If You do'not have an account <NavLink to= '/signUp' className="navlink"> SignUp</NavLink> </p>
    </div>
    </div>
  )
}

export default SignIn;
