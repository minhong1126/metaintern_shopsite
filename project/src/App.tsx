import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import PaymentPage from './pages/PaymentPage';
import AddCardPage from './pages/AddCardPage';

function App(){
  return(
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path=':index/pay' element={<PaymentPage />} />
    <Route path='/addCard' element={<AddCardPage />} />
  </Routes>
  )
}

export default App;