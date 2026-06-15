import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import ContactMe from './pages/ContactMe/ContactMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
