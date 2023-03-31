import React, { useState } from 'react';
import '../Signup/signup.css';
import { checkPassword, validateEmail } from '../../utils/helpers';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../../utils/mutations';

import { LOGIN_USER } from '../../utils/mutations';
import { useNavigate } from 'react-router-dom'; 
import Footer from '../Footer/index';

import Auth from '../../utils/auth'

import './index.css';
const Login = (props) => {

    
    // const [email, setEmail] = useState('');
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const[validated] = useState("false");
    const [login,{error,data}] = useMutation(LOGIN_USER);
    const[showAlert, setShowAlert] = useState(false);
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    

    const navigate = useNavigate();

    // const handleInputChange = (e) => {
    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value;

    //     if (inputType === 'email') {
    //         setEmail(inputValue);
    //     } 
    //     else{
    //         setPassword(inputValue);
    //     }
    // };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({...userFormData, [name]:value});
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!validateEmail(userFormData.email)) {
            setErrorMessage('Email or username is invalid');
            return;
        }

        if (!checkPassword(userFormData.password)) {
            setErrorMessage(`Please choose more secure password!`);
            return;
        }
        // alert(`Hello ${userName}`);
        try {
            const {data} = await login({
                variables: { ...userFormData}});
            Auth.login(data.login.token);
            event.preventDefault();
            navigate("/calculator");
        } 
        
        
        catch(err) {
            console.log(err);
            setShowAlert(true)
        }

        setUserFormData({
            email:"", 
            password:"",
            
        });
       
            
          
        
    };



    return (
        <>
        <div className='form-container'>
                 <div className='form-content-right'>
           
           <form className='form' noValidate validate={validated} onSubmit={handleFormSubmit}>
               <h1>Good to see you again! </h1>

            

               <div className='form-inputs'>
                   <label type='email' className='form-label'>Email</label>
                   <input value={userFormData.email} onChange={handleInputChange} type='text' className='form-input' name='email' placeholder='Enter your email'>
                   </input>


               </div>

               <div className='form-inputs'>
                   <label type='password' className='form-label'>Password</label>
                   <input value={userFormData.password} onChange={handleInputChange} type='password' className='form-input' name='password' placeholder='Enter your password'>
                   </input>


               </div>


               <button className='form-input-btn' type='submit'>Login</button>
               <span className='form-input-login'>Ready to Plan your Meal? Sign Up <a href="/signup">Here</a></span>

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



// const Login = (props) => {
//     const [formState, setFormState] = useState({ email: '', password: '' });
//     const [login, { error, data }] = useMutation(LOGIN_USER);
//     const navigate = useNavigate();

//     // update state based on form input changes
//     const handleChange = (event) => {
//       const { name, value } = event.target;
  
//       setFormState({
//         ...formState,
//         [name]: value,
//       });
//     };
  
//     // submit form
//     const handleFormSubmit = async (event) => {
//       event.preventDefault();
//       console.log(formState);
//       try {
//         const { data } = await login({
//           variables: { ...formState },
//         });
  
//         Auth.login(data.login.token);
//       } catch (e) {
//         console.error(e);
//       }
  
//       // clear form values
//       setFormState({
//         email: '',
//         password: '',
//       });
//     };
  
//     return (
//       <main className="flex-row justify-center mb-4">
//         <div className="col-12 col-lg-10">
//           <div className="card">
//             <h4 className="card-header bg-dark text-light p-2">Login</h4>
//             <div className="card-body">
//               {data ? (
//                 <p>
//                   Success! You may now head{' '}
//                   <Link to="/">back to the homepage.</Link>
//                 </p>
//               ) : (
//                 <form onSubmit={handleFormSubmit}>
//                   <input
//                     className="form-input"
//                     placeholder="Your email"
//                     name="email"
//                     type="email"
//                     value={formState.email}
//                     onChange={handleChange}
//                   />
//                   <input
//                     className="form-input"
//                     placeholder="******"
//                     name="password"
//                     type="password"
//                     value={formState.password}
//                     onChange={handleChange}
//                   />
//                   <button
//                     className="btn btn-block btn-primary"
//                     style={{ cursor: 'pointer' }}
//                     type="submit"
//                   >
//                     Submit
//                   </button>
//                 </form>
//               )}
  
//               {error && (
//                 <div className="my-3 p-3 bg-danger text-white">
//                   {error.message}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     );
//   };
  
//   export default Login;
  