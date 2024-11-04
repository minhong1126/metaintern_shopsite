import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import MainPage from './pages/MainPage';
import PaymentPage from './pages/PaymentPage';
import AddCardPage from './pages/AddCardPage';
import CartPage from './pages/CartPage';

function App(){
  return(
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path=':index/pay' element={<PaymentPage />} />
        <Route path='/addCard' element={<AddCardPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </RecoilRoot>
  )
}

export default App;