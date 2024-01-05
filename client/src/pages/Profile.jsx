import { useSelector } from 'react-redux';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center m-7'>Profile</h1>
      <form className='flex flex-col gap-4' >
        <img src={currentUser.avatar} alt="profile" className='rounded-full w-24 h-24 object-cover cursor-pointer self-center mt-3 mb-3 '  />
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' />
        <input type="email" placeholder='email' className='border p-3 rounded-lg'  id='email'/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' />
<button className='bg-slate-700 uppercase rounded-lg  p-3  text-white hover:opacity-95 disabled:opacity-80'>Update</button>
<button className='bg-green-700 uppercase rounded-lg  p-3  text-white hover:opacity-95 disabled:opacity-80'>Create Listing</button>

      </form >
    </div>
  );
};

export default Profile;
