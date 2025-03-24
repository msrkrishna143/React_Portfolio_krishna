
import React from 'react';
import './App.css';
import AppRoutes from './login/appRoute';
import Home from './login/Home';
import { Route, Router, Routes } from "react-router-dom";




const App = () => {
  return (
    <>  
      <div>
     <AppRoutes />
     </div>
    </>
  );
};



export default App;


