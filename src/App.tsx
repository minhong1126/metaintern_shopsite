import { HashRouter, Route, Routes} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import MainPage from './pages/MainPage';
import PaymentPage from './pages/PaymentPage';
import AddCardPage from './pages/AddCardPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import PaySuccessPage from './pages/PaySuccessPage';

function App() {
  return (
    <RecoilRoot>
      {/* <BrowserRouter basename='https://minhong1126.github.io/metaintern_shopsite/' /> */}
      {/* <HashRouter> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pay" element={<PaymentPage />} />
          <Route path="/addCard" element={<AddCardPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:index" element={<ProductPage />} />
          <Route path="/paySuccess" element={<PaySuccessPage />} />
        </Routes>
      {/* </HashRouter> */}
    </RecoilRoot>
  );
}

export default App;