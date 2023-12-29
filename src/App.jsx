import react from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route path='/sign-in' element={<Signin/>}/>

   
   </Routes>
   </BrowserRouter>
  )
}

export default App
