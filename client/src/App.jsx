
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import { Header } from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import ListingPage from '/src/pages/ListingPage.jsx';
import Search from './pages/Search'



function App() {

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route path='/sign-in' element={<Signin/>}/>
    <Route path='/listing/:listingId' element={<ListingPage/>}/>
    <Route path='/search' element={<Search/>}/>

    <Route element={<PrivateRoute/>}/>
    <Route path='/profile' element={<Profile/>}/>

    
    <Route path='/create-listing' element={<CreateListing/>}/>
    <Route path='/update-listing/:listingId' element={<UpdateListing/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
