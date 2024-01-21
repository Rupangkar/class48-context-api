import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../Componets/Home/Home";
import Registration from "../Componets/Registration/Registration";
import Login from "../Componets/Login/Login";
import PrivetRoute from "./PrivetRoute";
import About from "../Componets/About/About";


export const router= createBrowserRouter([
          {
                    path:'/',
                    element:<Main></Main>,
                    children:[
                              {
                                 path:'/',
                                 element:<PrivetRoute> <Home></Home> </PrivetRoute>       
                              },
                              {
                                 path:'/about',
                                 element:<PrivetRoute> <About></About> </PrivetRoute>       
                              },
                              {
                                        path:'/register',
                                        element:<Registration><About></About></Registration>
                              },
                              {
                                        path:'/login',
                                        element:<Login></Login>
                              },
                             
                    ]
          }
]);