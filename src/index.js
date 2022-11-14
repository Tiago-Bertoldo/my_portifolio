import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
      <Router>
        <Header />
        <Routes>
            <Route path='/' element={< Home/>}>
            <Route path='/myintro' element={<Home/>}/>
            </Route>
        </Routes>
      </Router>
    
  
  </React.StrictMode>
);
