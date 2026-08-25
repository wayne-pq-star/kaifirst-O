
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 移除原生 LCP 骨架，避免 React 進行不必要的 DOM 比對，降低 TBT
document.getElementById('lcp-skeleton')?.remove();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
