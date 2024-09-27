// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from './components/UserDetails';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
