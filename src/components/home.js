import React, { Component }  from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import UserProfile from './userProfile';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";


function Home(){
    return(
        <div>
            <PrimarySearchAppBar/>
            <BrowserRouter>
            <Routes>
            <Route path =  "/profile`" element =  {<UserProfile/>}/>
            </Routes>
            
            </BrowserRouter>
            
        </div>
    )
}
export default Home;