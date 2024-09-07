import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

// React 18에서는 createRoot를 사용하여 루트 요소를 렌더링합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// 앱을 루트 요소에 렌더링합니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
