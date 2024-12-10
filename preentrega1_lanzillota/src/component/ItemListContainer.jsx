function ItemListContainer(props) {
    const{title, text}=props
  return (
    <div className="item-list-container">
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
  )
}

export default ItemListContainer