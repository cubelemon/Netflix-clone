import React, { useEffect } from 'react'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import{ Routes, Route, useNavigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import { ToastContainer, toast } from 'react-toastify';
  



const App = () => {

  const navigate = useNavigate();

  useEffect (() => {

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log('Logged In')
      navigate('/');
    } else {
      console.log ('Logged Out')
      navigate('/login');
    }
  
  })

}, [])

  return (
    <>
      <ToastContainer theme='dark'/>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    <Routes>
      <Route path='/login' element={<Login />}/>
    </Routes>
    <Routes>
      <Route path='/player/:id' element={<Player />}/>
    </Routes>
      

    </>
  )
}

export default App