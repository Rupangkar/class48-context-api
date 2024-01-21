// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React,{ useContext, useState } from 'react';
// import app from '../../Firebase/Firebase.inti';
// import app from '../../firebase/firebase.inti';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';




const Login = () => {
          
  const {loginUser,resetPassword} = useContext(AuthContext)

           const [error,setError]=useState(null)
           const[success,setSuccess]=useState(false)
           const [userEmail,setUserEmail]=useState('')

           const navigate =useNavigate();
           const location =useLocation();
           const from =location.state?.form?.pathname ||'/'

          
        const handleLogin=(event) =>{
          
                    event.preventDefault();
                     const form =event.target;
                     const email =form.email.value;
                    const password =form.password.value;
                    
                    loginUser(email, password )
                    .then(result=>{
                      const user =result.user;
                      console.log(result);
                      form.reset();
                      navigate(from,{ replace: true})
                    })
                    .catch(error=>{
                      console.log(error)
                    })
          
          }
          const handleEmailBlur=(event)=>{
             const email =event.target.value;
             console.log(email);
             setUserEmail(email) 
          }  
          const handleForgetPassword=()=>{
            if(!userEmail){
              alert('Please enter the email')
              return
              
            }
            console.log(userEmail);
            
            resetPassword(userEmail)
            .then(() => {
              alert('please check email and reset the password')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
            

          }

    
          return (
                    <div className="hero min-h-screen bg-base-100">
                    <div className="hero-content flex-col">
                      <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Login Now!</h1>
                       
                      </div>
                      <div className="card shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        
                        <form onSubmit={handleLogin}className="card-body">
                         
        
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleEmailBlur} type="email" name='email'placeholder="email" className="input input-bordered" required />
                          </div>
        
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Password</span>
                            </label>
                            <input type="password"name='password' placeholder="password" className="input input-bordered" required />

                            <label className="label">
                            <button onClick={handleForgetPassword} className="label-text-alt link link-hover">Forget Password ? Please Reset Password </button>
                            </label>

                            <label className="label">
                            <Link to='/register'className="label-text-alt link link-hover">Dont have an account?please Register </Link>
                            </label>
                          </div>
                             {
                               <p className='text-red-500'>{error}</p>
                             }
                              {
                              success && <p className='text-green-500'>Successfully Login Done</p>
                               }
                          <div className="form-control mt-6">
                            <button type ='submit' className="btn btn-primary">Login</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
          );
};

export default Login; 