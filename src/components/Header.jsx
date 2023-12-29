import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header className='bg-slate-900 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'> <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-100'>Yadav</span>
        <span className='text-green-700'><span className='text-red-800'>E</span>state</span>
        </h1> 
</Link>
        <form action="" className='bg-slate-100 p-2 rounded-lg flex items-center' >
            <input type="text"  placeholder='Search... ' className='bg-transparent focus:outline-none w-24 sm:w-64 '/>
            <FaSearch className="text-green-600"/>
        </form>

        <ul className='flex gap-4'>
         <Link to="/">   <li className='text-white hidden sm:inline hover:underline'>Home</li></Link>
         <Link to="/about"><li  className='text-white  hidden sm:inline hover:underline'>About</li></Link>
         <Link to="sign-in"><li  className='text-white sm:inline hover:underline'>Sign in</li></Link>
        </ul>
        </div>
      </header>
  )
}
