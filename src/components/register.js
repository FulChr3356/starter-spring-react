
import React, { Component ,useState} from "react";
import {  Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AuthService from "./auth/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};



 function Register(){
    
        const [username,setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [cpassword, setCPassword] = useState('');
        const [email, setEmail] = useState('');
        const [loading, setLoading] = useState('');
        const [message, setMessage] = useState('');
        

        const handleRegister = e => {
            setLoading(true);
            setMessage("");
            
        
            AuthService.register(username,email,password).then(
              () => {
                alert('User signed up successfully');
                // this.props.history.push("/dashboard");
              },
              error => {
                alert('Invalid information');
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
                  setLoading(true)
                  setMessage(resMessage)
                ;
              }
              
            );
            
          ;
        }
    
        return (
            <div>
                {/* <hr /> */}
                <div>
                <Form>
          <FormGroup>
          <Label for="username">Username</Label>
          <Input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                validations={[required]}
              />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                validations={[required]}/>
          </FormGroup>
          <FormGroup>
            <Label for="cpassword">Confirm Password</Label>
            <Input type="password"
                className="form-control"
                name="cpassword"
                value={cpassword}
                onChange={e => setCPassword(e.target.value)}
                validations={[required]}/>
          </FormGroup>
          <FormGroup>
          <Label for="username">Email</Label>
          <Input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                validations={[required]}
              />
          </FormGroup>

          </Form>
                </div>
                <div>
                    
                    <Button style = {{backgroundColor: "#2196f3"}} onClick = {handleRegister}  > Register</Button>
                    <div >
                    <Link className = "nav-link" to = {"/"}>
                    <Button style = {{backgroundColor: "#2196f3"}} > Login</Button>
                    </Link>
                     </div>
                </div>
            </div>
            
      
        );
}
export default Register;