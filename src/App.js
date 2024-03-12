import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './assets/libs/@mdi/font/css/materialdesignicons.min.css';
import IndexInsurance from './pages/index/indexInsurance';
import Switch from './component/Switch';
import Research from './component/Research/Research';
export default function App() {
    return (
        <BrowserRouter>
        <Switch/>
            <Routes>
               
                <Route exact path="/" element={<IndexInsurance />} />
                <Route path="/research"element={<Research />} />
               
            </Routes>
        
        </BrowserRouter>
    )
}
