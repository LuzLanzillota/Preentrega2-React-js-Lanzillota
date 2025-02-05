import { useContext } from "react";
import cartContext from "../context/cartContext";
import "./CartContainer.css"

function CartContainer() {
    const { cartItems, removeItem } = useContext(cartContext);

    return (
        <div className="cart-container">
            <h1>Tu carrito</h1>
            
            {cartItems.length === 0 ? (
                <p className="empty-cart">Tu carrito está vacío</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.img} alt="Imagen del producto" className="cart-img" />
                        <div className="cart-details">
                            <h3>{item.title}</h3>
                            <p>Precio: <span className="cart-price">${item.price}</span></p>
                            <p>Unidades: {item.count}</p>
                        </div>
                        <button className="remove-btn" onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default CartContainer;
