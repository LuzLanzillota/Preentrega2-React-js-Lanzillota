import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardProduct from './component/CardProduct'
import ItemListContainer from './component/ItemListContainer'
import NavBar from './component/NavBar'
import CartWidget from './component/CartWidget'

function App() {
  return (
    <>
      <div>
        <NavBar
          img="\public\images\Equa.png"
          alt="Logotipo de Equa"
          img2=""/>
         <img src="\public\images\usuario.png" alt="Imagen de usuario" class="right-img"></img>
        <CartWidget
          img="\public\images\carrito-de-compras1.png"
          alt="Imagen de carrito" />
      </div>




      <ItemListContainer
        title="Bienvenido/a a Equa"
        text="Descubre las mejores zapatillas para tu estilo. Tenemos las últimas tendencias y clásicos que te encantarán. ¡Disfruta tu visita!" />

      <section>
        <CardProduct
          price={216.59}
          title={"Zapatillas Jordan Air 1 Low Mujer"}
          text={"Ofrecen un look elegante y deportivo al mismo tiempo."}
          img="\public\images\zapatillas-2\NIDC0774-161-1.jpg"
          alt="Imagen de Zapatillas Jordan Legacy 312" />

        <CardProduct
          price={270.73}
          img="\public\images\zapatillas-1\NIFQ7827-006-1.jpg"
          alt="Imagen de Zapatillas Jordan Legacy 312"
          title={"Zapatillas Jordan Legacy 312 Mujer"}
          text={"Un diseño único que fusiona los modelos más icónicos de Jordan."}
        />
        <CardProduct
          price={374.11}
          title={"Zapatillas Jordan Air 4 Retro Vivid Sulfur Mujer"}
          text={"Proporcionan una amortiguación eficaz."}
          img="\public\images\zapatillas-3\NIAQ9129-101-1.jpg"
          alt="Imagen de Zapatillas Jordan Legacy 312"
        />
      </section>

    </>
  )
}

export default App
