import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Hearts from './Pages/Hearts';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path={["/", "/shop"]} element={<Shop />} />
          <Route path="/shop/:category" element={<ShopCategory />} />
          <Route path="/shop/:category/:product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login-signup" element={<LoginSignup />} /> */}
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men"/>} />
          <Route path="/women" element={<ShopCategory category="women"/>} />
          <Route path="/kids" element={<ShopCategory category="kids"/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/hearts" element={<Hearts />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
