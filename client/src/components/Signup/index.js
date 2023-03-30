import React, { useState } from 'react';
import '../Signup/signup.css';
// import signup from '../../images/signup.png';
import { checkPassword, validateEmail } from '../../utils/helpers';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../../utils/mutations';
import { useNavigate } from 'react-router-dom';  


function Signmeup() {

    const [userName, setUserName] = useState('');
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
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setPassword(inputValue);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !userName) {
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
                variables: {username: userName, email: email, password: password}
            });
            
            setUserName('');
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

            <div className='form-content-left'>

                {/* <img className='form-image' src={signup} alt="sample"/> */}
                <div className='form-image' style={{ backgroundImage: `url("https://source.unsplash.com/random/?salads")` }}></div>
            </div>

            <div className='form-content-right'>

                <form className='form' onSubmit={handleFormSubmit}>
                    <h1>Don't Have an Account? Sign Up</h1>

                    <div className='form-inputs'>
                        <label className='form-label'>Username</label>
                        <input type='text' className='form-input' name='userName' placeholder='Enter your name' value={userName} onChange={handleInputChange}>
                        </input>
                    </div>

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


                    <button className='form-input-btn' type='submit'>Sign Up</button>
                    <span className='form-input-login'>Already have an Account? Login <a href="/">Here</a></span>

                    {errorMessage && (
                        <div>
                            <h2 className='error-text'><mark>{errorMessage} Broken</mark></h2>
                        </div>)}
                </form>


            </div>
         </div>
 
</>  
    );
}

export default Signmeup;



