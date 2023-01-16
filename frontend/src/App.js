import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

//component form

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './component/navbar/Navbar'
import Tablefun from './component/table/Table';
import Formus from './component/table/Form'
function App() {

  return (
    <div>
      <NavBar />
      <div className='container'>
        <Tablefun  />
       
       
      </div>
    </div>
  );
}

export default App;
