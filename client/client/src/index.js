// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // 🔥 Add this line to import global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
