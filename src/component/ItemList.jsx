
import Item from "./Item";

function ItemList(props) {
    return (
        <div>
            <h2>{props.greeting}</h2>

                {props.products.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        text={item.category}
                        img={item.img}
                    />
                ))}
                
        </div>
    );
}

export default ItemList;