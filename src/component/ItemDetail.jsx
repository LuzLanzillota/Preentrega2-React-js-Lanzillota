import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import "./ItemDetail.css"

function ItemDetail(props) {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const { price, title, description, img, stock, id } = props;
    const { addItem } = useContext(cartContext);
    function onSubmitCount(count) {
        addItem({ id, price, title, count, img });
        setIsAddedToCart(true);
    }

    return (
        <div className="detail-container">
            <div className="detail">
                <div className="product-detail">
                    <img src={img} alt="product img" className="product-img" />
                    <div className="product-info">
                        <h3 className="product-title">{title}</h3>
                        <p className="product-price">$ {price}</p>
                        <p className="product-description">{description}</p>
                        <div className="product-count">
                            {isAddedToCart ? (
                                <button>Ver Carrito</button>
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
