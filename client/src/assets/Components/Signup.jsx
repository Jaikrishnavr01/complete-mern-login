import React, { useState } from 'react'
import './loginsignup.css'
import Axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

function Signup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/signup', {
            username,
            email,
            password
        }).then(response => {
            console.log(response);

            if(response.data.status){
                navigate('/login')
            }
            
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='sign-up-container'>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <h2>Sign up</h2>

                <label htmlFor="">username:</label>
                <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="">Email:</label>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="">password:</label>
                <input type="password" placeholder='*******' onChange={(e) => setPassword(e.target.value)} />

                <button type='Submit'>Sign Up</button>

                <p>I dont have an Account?  <Link to='/login'>Login</Link></p>
               
            </form>
        </div>
    )
}

export default Signup
