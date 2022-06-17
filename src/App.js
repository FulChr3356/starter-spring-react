import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react'
import Login from "./components/login";
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
       </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
