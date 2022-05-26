
import React from 'react';
import { useState } from 'react';
import '../index.css'
import { useNavigate } from 'react-router-dom';
import{Button} from 'react-bootstrap'

 const Login = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [pwd, setLP] = useState('');
  const [Login, setLogin] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleUsername = (event) => {
    setUsername(event.target.value);
    setLogin(false);
  }

  const handleLoginPwd = (event) => {
    setLP(event.target.value);
    setLogin(false);
  }

  const handleLogin = (event) => {
    event.preventDefault();
    if (username==='' || pwd==='') {
    setError(true);
    } else {
    setSubmitted(true);
    alert(`User ${username} successfully Logged in..!`)
    navigate('/')
    setError(false);
    }
    
};

const successMessage = () => {

  return (
  <div
      className="success"
      style={{
      display: submitted ? '' : 'none',
      }}>
      <h1>User {username} successfully Logged in..!</h1>
  </div>
  );
  
};

// Showing error message if error is true
const errorMessage = () => {
  return (
  <div
      className="error"
      style={{
      display: error ? '' : 'none',
      }}>
      <h4><i>Please enter all the fields</i></h4>
  </div>
  );
};


  return (
    <div>
      <div className="body">
        {errorMessage()}
        {successMessage()}
      </div>
        
      <label className="label"> <h2 style={{color:'blue'}}>Username</h2></label>
      <input onChange={handleUsername} className="input"
        value={username} type="text" required/><br />
        <br />
        <br />
      <label className="label"> <h2 style={{color:'blue'}}>Password</h2></label>
      <input onChange={handleLoginPwd} className="input"
        value={pwd} type="password" required/><br />
        <br />
        <br />
        <Button onClick={handleLogin} className="btn"  value={Login}>Login</Button>
    </div>
  )}
  export default Login