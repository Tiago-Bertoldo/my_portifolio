import React  from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ProviderLanguagem from './providers/auth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderLanguagem>
      <Router>
        <Routes>
            <Route path='/' element={< Home/>}>
            </Route>
        </Routes>
      </Router>
      </ProviderLanguagem>
      
    
  
  </React.StrictMode>
);
