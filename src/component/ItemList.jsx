import FlexContainer from "./FlexContainer";
import Item from "./Item";

function ItemList(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>

            <FlexContainer>
                {props.products.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </FlexContainer>

        </div>
    );
}

export default ItemList;