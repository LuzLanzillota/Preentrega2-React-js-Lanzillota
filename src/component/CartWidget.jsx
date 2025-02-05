import { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";

function CartWidget() {
  const { countItemsInCart } = useContext(cartContext);
  const itemCount = countItemsInCart();

  if (itemCount === 0) return null;

  return (
    <div className="cart">
      <Link to="/cart">
        <img src="/images/carrito-de-compras1.png" alt="Imagen de carrito" style={{ cursor: "pointer" }} />
      </Link>

      <span className="cart-text">{itemCount}</span>
    </div>
  );
}

export default CartWidget;




