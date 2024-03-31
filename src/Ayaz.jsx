import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SignIn from './Componenet/Store/Verificatin/SignIn';
import SignUp from './Componenet/Store/Verificatin/SignUp';
const Ayaz = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element = {<SignUp/>}/>
      <Route path='/signIn' element = {<SignIn/>}/>
      <Route path='/signUp' element = {<SignUp/>}/>
      <Route path='/App' element = {<App/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Ayaz;
