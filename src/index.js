import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './normalize.css';


ReactDOM.render(
    <BrowserRouter>
    <App /> 
    </BrowserRouter>
    ,
    document.getElementById('root'));


