import { startTransition } from "react";
import './App.css'
import ItemListContainer from './component/ItemListContainer'
import NavBar from './component/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './component/ItemDetailContainer'
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./component/CartContainer";



function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>

        <NavBar />
        <Routes>

          <Route path="/" element={<ItemListContainer greeting="Inicio" />} />
          <Route path="/category/:catid" element={<ItemListContainer greeting="Compra por categoria" />} />
          <Route path="/item" element={<div className="inicio-container"><h1>Detalle</h1></div>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route
            path="/"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>

        <footer>
          <small>Created by Equa 2025.</small>
        </footer>
      </BrowserRouter>
    </CartContextProvider>

  );
}

export default App
