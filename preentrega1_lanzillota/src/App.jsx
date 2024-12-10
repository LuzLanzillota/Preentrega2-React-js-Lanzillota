import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardProduct from './component/CardProduct'
import ItemListContainer from './component/ItemListContainer'
import NavBar from './component/NavBar'

function App() {
  return (
    <>
 <div>
 <NavBar
      img="\public\images\Equa.png"
      alt="Logotipo de Equa"/>
 
 </div>
      
      

  
   <ItemListContainer
   title="Bienvenido/a a Equa"
   text="Descubre las mejores zapatillas para tu estilo. Tenemos las últimas tendencias y clásicos que te encantarán. ¡Disfruta tu visita!"/> 
   
    {/* prop con saludo */}
  {/* <section>

   <CardProduct 
   price={25.50} 
   title={"Remera"}
   text={"Best remera ever"}/> 

<CardProduct 
   price={18} 
   title={"Gorra"}
   text={"Best gorra ever"}/> 
   <CardProduct 
   price={30.50} 
   title={"Camisa"}
   text={"Best camisa ever"}/> 

  </section> */}
 
    </>
  )
}

export default App
