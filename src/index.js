import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './FontAgro.css';
import './css/Reset.css';
import { createRoot } from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode basename='Redheartday'>
    <App />
  </React.StrictMode>
);

function Root() {
  return (
    <>
    <App />
      <div style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '10vh' }}></div>
    </>
  )
}

createRoot(document.getElementById('root')).render(<Root />)

