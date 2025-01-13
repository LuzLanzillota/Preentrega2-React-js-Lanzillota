import './App.css'
import ItemListContainer from './component/ItemListContainer'
import NavBar from './component/NavBar'
import CartWidget from './component/CartWidget'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './component/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>

      <NavBar />
      <CartWidget />

      <Routes>

        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:catid" element={<ItemListContainer greeting="Compras por categoría" />} />
        <Route path="/item" element={<div className="inicio-container"><h1>Detalle</h1></div>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route
          path="/"
          element={<ItemListContainer />}
        />
      </Routes>

      <footer>
        <small>Created by Equa 2025.</small>
      </footer>
    </BrowserRouter>

  );
}

export default App
