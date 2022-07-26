import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
export { default as Presentation } from './components/Presentation/Presentation'
export { default as Layout } from './components/Layout/Layout'
export { default as AboutMe } from './components/AboutMe/AboutMe'
export { default as Contact } from './components/Contact/Contact'
export { default as Logo } from './assets/logo.webp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
