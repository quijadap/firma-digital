import './App.css';
import React, {Suspense, useState, useEffect} from 'react'
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './Components/Home';
import Upload from './Components/Upload';
import Reportproblem from './Components/Reportproblem';

const  Reacttutorial = React.lazy(()=> import ('./Components/Reacttutorial') );

function App() {
  
return (

<div>
   
  
<div className="mainnav">
              <NavLink style={({ isActive }) => ({
              color: isActive ? 'red' : 'blue'
            })} className="bloglink1" to="/">Home</NavLink>
                       <NavLink style={({ isActive }) => ({
              color: isActive ? 'red' : 'green'
            })} className="bloglink1" to="/reportproblem">Report a problem</NavLink>

          <NavLink style={({ isActive }) => ({
              color: isActive ? 'red' : 'green'
            })} className="bloglink1" to="/Upload">Subir Archivo</NavLink>

    </div>

  <div className="mainroutes">
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/reportproblem" element={<Reportproblem/>}></Route>
        <Route path="/upload" element={<Upload/>}></Route>
    </Routes>
  </div>


  </div>
);


}

export default App;
