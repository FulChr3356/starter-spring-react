import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react'
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <Routes>
       <Route path = "/" element = {<Login/>}/>
       <Route path = "/registration" element = {<Register/>}/>
       <Route path = "/home"  element = {<Home/>}>

       </Route>
       </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
