import React from 'react'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import{ Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <>
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