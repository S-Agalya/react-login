import React, { useState } from 'react'

const Login = () => {

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const [message, setMessage]=useState()

    function signinHandler(){
        if(email === "abc@gmail.com" && password === "abc@123"){  
            setMessage('Loadding....')    
           setTimeout(()=>{
            setMessage("successully logged in!!")
           },3000)
          }
    }
  return (
    
    <div>
      <h1>Login</h1>
      <input type='text' placeholder='Enter your name' onChange={(e)=>setEmail(e.target.value)}/><br/>
      <input type='text' placeholder='Enter your name' onChange={(e)=>setPassword(e.target.value)}/><br/>
      <button onClick={signinHandler}>Sign in</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Login
