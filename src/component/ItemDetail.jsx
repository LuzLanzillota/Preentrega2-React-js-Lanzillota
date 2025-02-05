import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import "./ItemDetail.css";

function ItemDetail(props) {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const { price, title, description, img, stock, id, discount } = props;

    const { addItem } = useContext(cartContext);

    function onSubmitCount(count) {
        if (discount > 0) {
            const discountedPrice = price - (price * discount / 100);
            addItem({ id, price: discountedPrice, title, count, img });
        } else {
            addItem({ id, price, title, count, img });
        }
        setIsAddedToCart(true);
    }

    return (
        <div className="detail-container">
            <div className="detail">
                <div className="product-detail">
                    <img src={img} alt="product img" className="product-img" />
                    <div className="product-info">
                        <h3 className="product-title">{title}</h3>
                        <p className="product-price">
                            {discount > 0 ? (
                                <>
                                    <span className="old-price">$ {price}</span>
                                    <span className="discounted-price">$ {price - (price * discount / 100)}</span>
                                </>
                            ) : (
                                `$ ${price}`
                            )}
                        </p>

                        <p className="product-description">{description}</p>
                        <div className="product-count">
                            {isAddedToCart ? (
                                <Link to="/cart">
                                    <button>Ver Carrito</button>
                                </Link>
                            ) : (
                                <ItemCount onSubmitCount={onSubmitCount} max={stock} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;

