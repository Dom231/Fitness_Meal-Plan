import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
 import './bootstrap.min.css'
// Uncomment import statement below after building queries and mutations
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Meallist from './pages/Meallist';
import Calculator from './pages/Calculator';
import Signup  from './components/Signup';
import Profile from './pages/Profile';
import Aboutus from './pages/Aboutus';
import Login from './components/Login';

import { MealProvider } from './utils/MealContext';



const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
   <ApolloProvider client={client}>
    <MealProvider>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/meallist' element={<Meallist/>} />
        <Route path='/calculator' element={<Calculator/>} />
        <Route path='/me' element={<Profile/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/aboutus' element={<Aboutus/>} />
        </Routes>
      </Router>
    </MealProvider>
   </ApolloProvider>
  );
}

export default App;