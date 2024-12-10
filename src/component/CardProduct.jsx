function CardProduct(props) {
  const {price, title, text}= props
  return (
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
        </div>
        <div>
            <p className="card-price">${price}</p>
            <button>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default CardProduct
