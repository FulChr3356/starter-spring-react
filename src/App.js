import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react'
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/userProfile";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <PrimarySearchAppBar/>
    <div className="App">
      <header className="App-header">
       <Routes>
       <Route path = "/" element = {<Login/>}/>
       <Route path = "/registration" element = {<Register/>}/>
       <Route path = "/profile"  element = {<Profile/>}>
       </Route>
       </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
