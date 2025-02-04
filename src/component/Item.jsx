import { Link } from "react-router-dom";
import Button from "./Button";
import "./Item.css";
import ItemCount from "./ItemCount";

function Item(props) {
    const { price, title, text, img, id, discount, stock, freeShipping } = props;

    // Si hay descuento, calculamos el precio con descuento
    const discountedPrice = discount ? price - (price * discount / 100) : price;

    return (
        <div className="container">
            <div className="card">
                <img src={img} alt="product img" />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{text}</p>
                    <div className="card-price-container">
                        {/* Precio original tachado si hay descuento */}
                        {discount && (
                            <p className="original-price">
                                ${price}
                            </p>
                        )}
                        {/* Precio con descuento o precio normal */}
                        <p className={`card-price ${discount ? 'discounted-price' : ''}`}>
                            ${discount ? discountedPrice : price}
                        </p>
                        {discount && <span className="discount-message">Producto en oferta!</span>}
                    </div>
                    {freeShipping && <span className="free-shipping-message">¡Envío gratis!</span>}

                    {/* Cartel de "Sin Stock" si no hay stock */}
                    {stock <= 0 && <span className="out-of-stock">Sin stock</span>}

                    <Link to={`/item/${id}`}>
                        <Button>Ver Detalle</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}





export default Item;

