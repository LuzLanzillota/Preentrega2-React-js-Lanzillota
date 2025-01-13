import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail(props) {
    const { price, title, description, text, img, stock } = props;

    function onSubmitCount(count) {
        console.log(`Agregaste ${count} unidades al carrito`);
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
                            <ItemCount onSubmitCount={onSubmitCount} max={stock} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
