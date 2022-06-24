import react from 'react';
import React, { Component ,useState} from "react";
import {  Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AuthService from "./auth/auth.service";

const user = AuthService.getCurrentUser();

function UserProfile() {
    return( 
     <div>
        Hello {user.username} <br/>
        Email: {user.email}<br/>
     </div>
    )  
}
export default UserProfile;