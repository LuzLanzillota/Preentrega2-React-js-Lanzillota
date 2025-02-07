import getAsyncData, { getAsyncItemsByCategory } from "../data/database";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader"; 

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const { catid } = useParams(); 

  useEffect(() => {
    setLoading(true); 
    if (!catid) {
      getAsyncData()
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error))
        .finally(() => setLoading(false)); 
    } else {
      getAsyncItemsByCategory(catid)
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error))
        .finally(() => setLoading(false)); 
    }
  }, [catid]);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div>

      <h1>{catid ? `Compra por categoría` : props.greeting}</h1>

      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;


