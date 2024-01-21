import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';






const Registration = () => {
  const {createUser,googleLogin,verifyEmail,updateUserName } =useContext(AuthContext)

   const[success,setSuccess]=useState(false)
   const [error,setError]=useState(null);
   const [passwordError,setPasswordError]=useState('')

      const handleRegistration =(event)=>{
         event.preventDefault();
      const form =event.target;
      const name =form.fullName.value;
      const email =form.email.value;
      const password =form.password.value;
      if(!/(?=.*?[A-Z]*[A-Z])/.test(password)){
        setPasswordError('password shoud be  Tow Uppercase')
        return

      }
      if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
        setPasswordError('password shoud be Special Characters  Uppercase # ? ! @ $ % ^ & *')
        return

      }
      if(password.length <6){
        setPasswordError('password should be more than six Characters')
        return

      }
      setPasswordError('')

      createUser(email,password)
      .then(result=>{
        console.log(result);
        verifyEmail()
        updateUserName (name)
      })
      .catch(error=>{
        console.log(error);
      })

  
      }
      const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
          console.log(result);
        })
        .catch(error=>{
          console.log(error);
        })
      }
     
          return (
            <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold">Registration now!</h1>
               
              </div>
              <div className="card shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                
                <form onSubmit={handleRegistration}className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Full Name </span>
                    </label>
                    <input type="text" placeholder="Full Name" name='fullName'className="input input-bordered" required />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email'placeholder="email" className="input input-bordered" required />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password"name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                      <Link to='/login'className="label-text-alt link link-hover">Already have an account?please Login </Link>
                    </label>
                  </div>
                  <p className='text-red-500'>{passwordError}</p>
                  {
                    success && <p className='text-green-500'>Successfully Register Done</p>
                  }
                   {
                               <p className='text-red-500'>{error}</p>
                  }
                  <div className="form-control mt-6">
                    <button type ='submit' className="btn btn-primary">Registration</button>
                  </div>
                  <div className="form-control mt-6">
                    <button onClick={handleGoogleLogin}className="btn btn-primary">Login With Google</button>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
          );
};

export default Registration;