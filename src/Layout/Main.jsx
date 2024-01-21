import React from 'react';
import Navber from '../Componets/Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Shared/Footer/Footer';
// import Home from '../Componets/Home/Home';

const Main = () => {
          return (
                    <div>
                        <Navber></Navber>
                       <Outlet></Outlet> 
                      <Footer></Footer> 
                    </div>
          );
};

export default Main;