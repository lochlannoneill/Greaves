import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headroom from "react-headroom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Shop } from "./Pages/Shop/Shop";
import { ShopCategory } from "./Pages/ShopCategory/ShopCategory";
import { Product } from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import Favourites from "./Pages/Favourites/Favourites";
import { LoginSignup } from "./Pages/LoginSignup/LoginSignup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headroom>
          <Navbar />
        </Headroom>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/girls" element={<ShopCategory category="girls" />} />
          <Route path="/boys" element={<ShopCategory category="boys" />} />
          <Route path="/products" element={<Product />}>
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/signup" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
