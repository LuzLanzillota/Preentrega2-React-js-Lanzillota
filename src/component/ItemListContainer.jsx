import getAsyncData, { getAsyncItemsByCategory } from "../data/getAsyncData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader"; // Importa el componente Loader

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar el loader
  console.log("%cRender de ItemListContainer", "color: yellow");
  const { catid } = useParams(); // Obtiene el parámetro de la URL

  useEffect(() => {
    setLoading(true); // Muestra el loader antes de cargar los datos
    if (!catid) {
      getAsyncData()
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error))
        .finally(() => setLoading(false)); // Oculta el loader después de cargar los datos
    } else {
      getAsyncItemsByCategory(catid)
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error))
        .finally(() => setLoading(false)); // Oculta el loader después de cargar los datos
    }
  }, [catid]);

  if (loading) {
    return <Loader />; // Muestra el loader mientras se están cargando los datos
  }

  return (
    <div>
      {/* Agregar el título dinámico basado en la categoría */}
      <h1>{catid ? `Zapatillas para ${catid}` : props.greeting}</h1>

      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;


