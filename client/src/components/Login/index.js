import React, { useState } from 'react';
import '../Signup/signup.css';
import { checkPassword, validateEmail } from '../../utils/helpers';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../../utils/mutations';
import { useNavigate } from 'react-router-dom'; 
import Footer from '../Footer/index';

import './index.css';
function Login() {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [addProfile, {error}] = useMutation(ADD_PROFILE);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } 
        else{
            setPassword(inputValue);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email or username is invalid');
            return;
        }

        if (!checkPassword(password)) {
            setErrorMessage(`Please choose more secure password!`);
            return;
        }
        // alert(`Hello ${userName}`);
        try {
            const {data} = await addProfile({
                variables: { email: email, password: password}
            });
            
          
            setEmail('');
            setPassword('');
            navigate("/calculator");
        } catch (err) {
            console.error(err);
        }
            

        
    };


    return (
        <>
        <div className='form-container'>
                 <div className='form-content-right'>
           
           <form className='form' onSubmit={handleFormSubmit}>
               <h1>Good to see you again! </h1>

            

               <div className='form-inputs'>
                   <label type='email' className='form-label'>Email</label>
                   <input value={email} onChange={handleInputChange} type='text' className='form-input' name='email' placeholder='Enter your email'>
                   </input>


               </div>

               <div className='form-inputs'>
                   <label type='password' className='form-label'>Password</label>
                   <input value={password} onChange={handleInputChange} type='password' className='form-input' name='password' placeholder='Enter your password'>
                   </input>


               </div>


               <button className='form-input-btn' type='submit'>Login</button>
               <span className='form-input-login'>Ready to Plan your Meal? Sign Up <a href="/">Here</a></span>

               {errorMessage && (
                   <div>
                       <h2 className='error-text'><mark>{errorMessage} Broken</mark></h2>
                   </div>)}
           </form>


       </div>
  <div className='form-content-left'>
          

                {/* <img className='form-image' src={signup} alt="sample"/> */}
                <div className='form-image' style={{ backgroundImage: `url("https://nypost.com/wp-content/uploads/sites/2/2016/07/salads-make-you-fat-hero-feature.gif")`, backgroundRepeat: 'round' }}></div>
            </div>

       </div>
       <Footer />
       </>
    );
}

export default Login;



