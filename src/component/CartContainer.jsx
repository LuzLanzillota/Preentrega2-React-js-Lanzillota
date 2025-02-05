import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import "./CartContainer.css";

function CartContainer() {
    const [userData, setUserData] = useState({
        username: "",
        surname: "",
        age: "",
    });

    const [orderCompleted, setOrderCompleted] = useState(false);

    const { cartItems, removeItem, getTotalPrice, setCartItems } = useContext(cartContext);

    function onInputChange(evt) {
        const { name, value } = evt.target;
        setUserData(prevData => ({ ...prevData, [name]: value }));
    }

    function handleCheckout(evt) {
        evt.preventDefault();
        setOrderCompleted(true);
        setCartItems([]);
    }

    function clearCart() {
        setCartItems([]);
    }

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

            {cartItems.length > 0 && (
                <div className="c-total">
                    <div className="total">
                        <p>Total: ${getTotalPrice()}</p>
                    </div>
                </div>
            )}

            {cartItems.length > 0 && (
                <button className="clear-cart" onClick={clearCart}>
                    Borrar carrito
                </button>
            )}

            {orderCompleted ? (
                <p className="realizada">Compra realizada</p>
            ) : (
                cartItems.length > 0 && (
                    <form className="cart-form" onSubmit={handleCheckout}>
                        <div>
                            <label>Nombre</label>
                            <input
                                name="username"
                                type="text"
                                onChange={onInputChange}
                                value={userData.username}
                            />
                        </div>

                        <div>
                            <label>Apellido</label>
                            <input
                                name="surname"
                                type="text"
                                onChange={onInputChange}
                                value={userData.surname}
                            />
                        </div>

                        <div>
                            <label>Edad</label>
                            <input
                                name="age"
                                type="text"
                                onChange={onInputChange}
                                value={userData.age}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={
                                !(
                                    userData.username.trim() !== "" &&
                                    userData.surname.trim() !== "" &&
                                    userData.age.trim() !== ""
                                )
                            }
                        >
                            Realizar Compra
                        </button>
                    </form>
                )
            )}


        </div>
    );
}

export default CartContainer;

