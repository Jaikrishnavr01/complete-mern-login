import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;
  const handlelogout = () => {
    axios.get("http://localhost:3000/auth/logout")
      .then(res => {
        if (res.data.status) {
          navigate('/login')
        }
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
  }
  return (
    <div>
      <button><Link to="/dashboard">Dashboard</Link></button>
      <br /> <br />
      <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Home
