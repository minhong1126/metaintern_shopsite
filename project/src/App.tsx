import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import PaymentPage from './pages/PaymentPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/pay' element={<PaymentPage />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

export default App;
