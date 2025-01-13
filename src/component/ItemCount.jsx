import { useState } from "react";
import "./ItemCount.css";
function ItemCount(props) {
    let [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count === props.max) return;
        console.log("Suma");
        setCount(count + 1);
    };

    const handleSubstract = () => {
        if (count === 1) return; // Evita que el contador baje de 0
        console.log("Resta");
        setCount(count - 1);
    };

    function handleClick() {
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
