import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
//import '../styles/signup.css'
function Signup() {  
  const navigate = useNavigate()

  const [values, setValues] = React.useState({
    
    firstname: '',
    lastname:'',
    email: '',
    password: '',
    confirmPassword: '',

  })

const handleChangefname = (event) => {
  setValues({...values,firstname: event.target.value})
}
const handleChangelname = (event) => {
  setValues({...values,lastname: event.target.value})
}
const handleChangeemail = (event) => {
  setValues({...values,email: event.target.value})
}
const handleChangepassword = (event) => {
  setValues({...values,password: event.target.value})
}
const handleChangeconfirmpassword= (event) => {
  setValues({...values,confirmPassword: event.target.value})
}
const [submitted,setSubmitted]=useState(false)
const handleSubmit=(event)=>{
  event.preventDefault();
  setSubmitted(true)
}


  function handleLogin(){
    navigate('/')
  }
  return (
    <div className='half'>

        
      
      {/******* Signup Form *********** */}
        <h1 className='signuplogo' style={{marginTop:'10px'}}>Resto</h1>
        <div className='signupform'>
          <h2 style={{color:'#fff'}}>Sign Up</h2>
          
          {submitted ?
          <Alert  variant='success' style={{width:'20%'}}>{`Success,Thanks for registering ${values.firstname} Click Login to continue`} </Alert>
         :null}
         <div style={{marginTop:'45px'}}>
          <form id='form' onSubmit={handleSubmit}> 

            <input required  className='signup_input'value={values.firstname} onChange={handleChangefname} type='text' placeholder='First Name'/><br/>
          
            
            <input required  className='signup_input'value={values.lastname}  onChange={handleChangelname} type='text' placeholder='Last Name'/><br/>
           
            <input required  className='signup_input'value={values.email} onChange={handleChangeemail} type='email' placeholder='Email'/><br/>

            <input required  className='signup_input'value={values.password} onChange={handleChangepassword} id='password'type='password' placeholder='Password'/><br/>
            
            <input required  className='signup_input'value={values.confirmPassword} onChange={handleChangeconfirmpassword} id='confirmpassword'type='password' placeholder='Confirm Password'/><br/>
            
            <button >Sign Up</button>
           <div>
            <h4 style={{fontFamily:'cursive',color:'grey',marginTop:'10px'}}>Already have an account?<p className='login' onClick={handleLogin}>Login!</p></h4>
            </div>
          </form>
          </div>
        </div>

        

    </div>

  )
}

export default Signup