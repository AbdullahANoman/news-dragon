import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, Routes } from 'react-router-dom';
import { router } from './Routes/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  
)
