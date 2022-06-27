import {Outlet, Navigate} from 'react-router-dom';

export const PrivateRoutes = () => {
  const access = localStorage.getItem('tokens')
  if(!access){
    return <Navigate to="/login" replace/>
  }
  else{
    return <Outlet />
  }
 
};