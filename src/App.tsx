import { Route, Routes} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import MainPage from './pages/MainPage';
import PaymentPage from './pages/PaymentPage';
import AddCardPage from './pages/AddCardPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import PaySuccessPage from './pages/PaySuccessPage';

// App.tsx
// Recoil을 사용하기 위한 RecoilRoot을 설정했습니다.
// 리다이렉션을 위한 페이지들을 Routes로 정리했습니다.

function App() {
  return (
    <RecoilRoot>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pay" element={<PaymentPage />} />
          <Route path="/addCard" element={<AddCardPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:index" element={<ProductPage />} />
          <Route path="/paySuccess" element={<PaySuccessPage />} />
        </Routes>
    </RecoilRoot>
  );
}

export default App;