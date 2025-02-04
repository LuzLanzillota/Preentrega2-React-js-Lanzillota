import { useContext } from "react";
import cartContext from "../context/cartContext";

function CartWidget() {
  const { countItemsInCart } = useContext(cartContext);
  const itemCount = countItemsInCart();

  if (itemCount === 0) return null;

  return (
    <div className="cart">
      <img src="/images/carrito-de-compras1.png" alt="Imagen de carrito" />
      <span className="cart-text">{itemCount}</span>
    </div>
  );
}

export default CartWidget;




