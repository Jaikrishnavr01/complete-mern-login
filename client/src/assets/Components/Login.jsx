import React, { useState } from 'react'
import './loginsignup.css'
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/login', {
            email,
            password
        }).then(response => {
            console.log(response);

            if (response.data.status) {
                navigate('/')
            }

        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='sign-up-container'>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <label htmlFor="">Email:</label>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="">password:</label>
                <input type="password" placeholder='*******' onChange={(e) => setPassword(e.target.value)} />

                <button type='Submit'>Login</button>
                <Link to="/forgotPassword">Forgot Password?</Link>
                <p>Have an  Account?  <Link to='/signup'>Sign Up</Link></p>

            </form>
        </div>
    )
}

export default Login
