import React, { useState } from "react";
import './email.css'
import App from "../../App";
import { TextField, Button } from "@mui/material";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [done, setDone] = useState(true);
    const [eerror,seteerror] = useState(false)
    const [ehelpertext,setehelpertext] = useState('')
    const [perror,setperror] = useState(false)
    const [phelpertext,setphelpertext] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email==='')
        {
            seteerror(true)
            setehelpertext('Enter your email')
        }
        if(pass==='')
        {
            setperror(true)
            setphelpertext('Enter your Password')
        }
        else
        setDone(true)
        
       
    }

    return (
        <>
        {done ? (<App/>) :
        <div className="App1">
        <div className="auth-form-container">
            
            <h1>Login</h1>
            <h1>Cineview</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <TextField 
                name="Email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                    seteerror(false)
                    setehelpertext('')
                }
                }
                variant="outlined"
                type="email"
                placeholder="youremail@gmail.com"
                label="Email"
                error={eerror}
                helperText={ehelpertext} 
                /> 
                <TextField 
                name="Password"
                value={pass}
                onChange={(e) => {
                    setPass(e.target.value)
                    setperror(false)
                    setphelpertext('')
                }
                }
                variant="outlined"
                type="password"
                placeholder="*******"
                label="Password"
                error={perror}
                helperText={phelpertext} 
                /> 
                {/* <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}}type="email" placeholder="youremail@gmail.com" id="email" name="Email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="Password"  /> */}
                <Button type="submit" variant="contained" >Log In</Button>
            </form>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
        </div>
        </div>}
        </> 
    )
}
export default Login;   