import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
const PrivateRoute = () => {
    const { currentUser } = useSelector((state) => state.user);
 currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute