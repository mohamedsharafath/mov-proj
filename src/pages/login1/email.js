import React, { useState } from "react";
import './email.css'
import App from "../../App";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDone(true)
        // alert("hello");
        // <App/>
        // console.log(email);
    }

    return (
        <>
        <div className="App1">
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
        </div>
        </div>
        {done ? <App/> : null}
        </> 
    )
}
export default Login;   