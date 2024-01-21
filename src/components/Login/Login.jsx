import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {

    const {loginUser, resetPassword} = useContext(AuthContext)
    
    const [error,setError]= useState(null)
    const [success,setSuccess]= useState(false)
    const [userEmail,setUserEmail] = useState('')
    

/* form thake value tola */

    const handleLogin = ( event ) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        loginUser(email,password)
           .then(result =>{
             const user = result.user;
             console.log(user);
             
           })
            .catch(error =>{
             console.log(error);
           }) 
       
        
        
    }
/* forget password */
    const handleEmailBlur = (event) =>{
      const email = event.target.value;
      console.log(email);
      setUserEmail(email)

    }

    const handleForhetPassword =()=>{
       if(!userEmail){
        alert('Please enter the email')
        return
       }
      

       resetPassword(userEmail)
       .then(() => {
          alert('Please check email and reset the password') 
        
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
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-96  shadow-2xl  bg-base-100">

            <form onSubmit={handleLogin} className="card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-nor font-semibold">Email</span>
                </label>
                <input onClick={handleEmailBlur} type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input  type="password" placeholder="password" name='password' className="input input-bordered " required />

                <label className="label">
                <button onClick={handleForhetPassword} className="label-text-alt link link-hover font-semibold">Forget Password ? Please Reset Password</button>
                </label>

                <label className="label">
                <Link to='/register' className="label-text-alt link link-hover font-semibold">Don't Have an account?<span className='hover:text-[#fa3206] font-semibold'> Please Register</span></Link>
                </label>

              </div>
              {
                <p className='text-red-500'>{error}</p>
              }

              {
                success && <p className='text-green-500'>Successfully Registration Dan</p>
              }
              <div className="form-control mt-6">
                <button type='Submit' className="btn btn-primary">Login</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
};

export default Login;