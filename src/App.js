import logo from './logo.svg';
import './App.css';
import { Login } from './components/login/Login';
import { Forget } from './components/signup/Forget';
import {Navbar} from './components/navbar/Navbar';
import { Homepage } from './components/homepage/Homepage';
import  { Category }  from './components/category/Category';
import {Products} from './components/category/Products';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Navigate,
  Routes,
} from "react-router-dom";
import { Component } from 'react';


function App() {
  return (
    <div className="App">
        <>
    
      <Router>
        <Routes>
       
          <Route exact path="/" element={<Login />} />
          <Route path="/forget" element={<Forget/>} />
          <Route path='/homepage' element={<Homepage/>}/>
           <Route path="/category" element={<Category/>} />
          {/* <Route path="/products" element={<Products/>} /> */}
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
         
        </Routes>
      </Router>
    </>
         </div>
  );
}

export default App;
