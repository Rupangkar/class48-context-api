import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import Loading from '../Componets/Shared/Loading/Loading';



const PrivetRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext) 
    const location = useLocation()
          if(loading){
                  return  <Loading></Loading>
          }
          if(user && user.uid){
          return children
          }
          return <Navigate to='/login' state={{from:location}} replace></Navigate>

          return (
                    <div>
                              
                    </div>
          );
};

export default PrivetRoute;