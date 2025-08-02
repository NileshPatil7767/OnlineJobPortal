import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from "./assets/sky.png";
import { render } from 'ejs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import About from './pages/about';
import Admin from './pages/admin';
import Home from './pages/home';

class App extends React.Component{

  render (){
  return <>
   <Router> 
    <Navbar/>
    <div className="content">
    <Routes>       
      <Route path='/Home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
    </Router>
    </>

    
    
  


}}



export default App;
