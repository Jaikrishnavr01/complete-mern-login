import Axios  from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './loginsignup.css'

function ResetPassword() {
    const [password, setPassword] = useState('')
    const {token} = useParams();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/reset-password/'+token, {
            password
        }).then(response => {
            // console.log(response);
            if (response.data.status) {
                navigate('/login')
            }
            console.log(response.data)

        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='sign-up-container'>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <h2>Reset Password </h2>

                <label htmlFor="">Enter your new password:</label>
                <input type="password" placeholder='*******' onChange={(e) => setPassword(e.target.value)} />
              
                <button type='Submit'>Reset</button>
            </form>
        </div>
    )
}

export default ResetPassword
