import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './bootstrap.min.css'
// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Meallist from './pages/Meallist';
import Profile from './pages/Profile';
import Signup  from './pages/Signup';
import Aboutus from './pages/Aboutus';
import Footer from './components/Footer';


function App() {
  return (
   
    <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/meallist' element={<Meallist/>} />
        <Route path='/me' element={<Profile/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/aboutus' element={<Aboutus/>} />
      
        </Routes>
        <Footer/>
    </Router>
    
  );
}

export default App;