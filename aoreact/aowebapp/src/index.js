import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './router/Home'
import Contact from './router/Contact'
import CardListSearch from './components/CardListSearch';
import CardDetail from "./components/CardDetails"
import Graph from './router/Graph';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Graph" element={<Graph />} />
                <Route path="Products" element={<CardListSearch />} />
                <Route path="" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="Products/:itemId" element={<CardDetail />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
