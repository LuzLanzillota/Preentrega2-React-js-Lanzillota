import { useState, useContext } from "react";
import "./ItemCount.css";
import cartContext from "../context/cartContext";

function ItemCount(props) {
    let [count, setCount] = useState(1);
    const { addItem } = useContext(cartContext);

    const handleAdd = () => {
        if (count === props.max) return;
        setCount(count + 1);
    };

    const handleSubstract = () => {
        if (count === 1) return;
        setCount(count - 1);
    };

    function handleClick() {
        addItem({
            id: props.id,
            price: props.price,
            title: props.title,
            count,
            img: props.img
        });
        props.onSubmitCount(count);
    }

    return (
        <div className="item-count-container">
            <div className="counter">
                <button className="counter-button" onClick={handleSubstract}>-</button>
                <span className="count-display">{count}</span>
                <button className="counter-button" onClick={handleAdd}>+</button>
            </div>
            <div>
                <button className="add-to-cart-button" onClick={handleClick}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;
