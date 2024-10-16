import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import PaymentPage from './pages/PaymentPage';
import AddCardPage from './pages/AddCard';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path=':index/pay' element={<PaymentPage />} />
          <Route path='/addCard' element={<AddCardPage />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);
root.render(<App />);

export default App;
