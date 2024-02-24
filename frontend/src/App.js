import './App.css';
import Headroom from 'react-headroom';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Hearts from './Pages/Hearts';
import LoginSignup from './Pages/LoginSignup';
import banner_women from './Components/Assets/banner_women.png';
import banner_men from './Components/Assets/banner_men.png';
import banner_girls from './Components/Assets/banner_girls.png';
import banner_boys from './Components/Assets/banner_boys.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headroom>
          <Navbar/>
        </Headroom>
        <Routes>
          {/* <Route path={["/", "/shop"]} element={<Shop />} />
          <Route path="/shop/:category" element={<ShopCategory />} />
          <Route path="/shop/:category/:product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login-signup" element={<LoginSignup />} /> */}
          <Route path="/" element={<Shop />} />
          <Route path="/women" element={<ShopCategory banner={banner_women} category="women"/>} />
          <Route path="/men" element={<ShopCategory banner={banner_men} category="men"/>} />
          <Route path="/girls" element={<ShopCategory banner={banner_girls} category="girls"/>} />
          <Route path="/boys" element={<ShopCategory banner={banner_boys} category="boys"/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/hearts" element={<Hearts />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
