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

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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