import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import EmpresasLista from './components/Empresas/EmpresasLista';
import EditarEmpresa from './components/EditarEmpresa/EditarEmpresa';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <Routes>
        <Route path="/empresas" element={<EmpresasLista />} /> 
        <Route path="/empresas/:id" element={<EditarEmpresa />} />
        <Route exact path="/" element={<App />} />
      </Routes>
      <Footer />
    
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
