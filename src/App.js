import React from "react";
import Cart from './pages/Cart.js';
import Photos from './pages/Photos.js';
import Header from "./components/Header.js";
import { BrowserRouter, Routes, Route  } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <header className="bg-black text-gray-50 h-10">
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<Photos/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;