import React, { useState } from 'react'
import './loginsignup.css'
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'


function ForgotPassword() {
    
    const [email, setEmail] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/forgot-password', {
            email
        }).then(response => {
            console.log(response);

            if (response.data.status) {
                alert("check your email for reset password link")
                navigate('/login')
            }
            
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='sign-up-container'>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <h2>Forgot Password ?</h2>

                <label htmlFor="">Email:</label>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              
                <button type='Submit'>Send</button>
            </form>
        </div>
    )
}

export default ForgotPassword
