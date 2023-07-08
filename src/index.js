import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'; // LOCAL
// import { HashRouter as Router } from 'react-router-dom'; // Deployed to Github

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router><App /></Router>
);
