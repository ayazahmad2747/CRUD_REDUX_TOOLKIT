import React from 'react'
import ReactDOM from 'react-dom/client'
import Ayaz from './Ayaz.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Componenet/Store/Store.jsx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
  <Provider store={Store}>
    <Ayaz />
    <ToastContainer/>
    </Provider>
    </React.Fragment>
  
)
