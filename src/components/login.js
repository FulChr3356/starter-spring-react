
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



 function Login(){
    
        const [username,setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [loading, setLoading] = useState('');
        const [message, setMessage] = useState('');
        

        const handleLogin = e => {
            setLoading(true);
            setMessage("");
            
        
            AuthService.login(username,password).then(
              () => {
                alert('User logged in successfully');
                // this.props.history.push("/dashboard");
              },
              error => {
                alert('Invalid creditials');
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

          </Form>
                </div>
                <div>
                    
                    <Button style = {{backgroundColor: "#2196f3"}} onClick = {handleLogin}  > Sign in</Button>
                    <p>Forgot your password? <a href="" > Reset</a></p>
                    <div >
                    <Link className = "nav-link" to = {"/registration"}>
                    <Button style = {{backgroundColor: "#2196f3"}} > Create an account</Button>
                    </Link>
                     </div>
                </div>
            </div>
            
      
        );
}
export default Login;