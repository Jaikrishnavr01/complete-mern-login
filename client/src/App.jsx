import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './assets/Components/Signup'
import Login from './assets/Components/Login'
import Home from './assets/Components/Home'
import ForgotPassword from './assets/Components/ForgotPassword'
import ResetPassword from './assets/Components/ResetPassword'
import Dashboard from './assets/Components/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword/:token' element={<ResetPassword />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
