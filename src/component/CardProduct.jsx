function CardProduct(props) {
  const { price, title, text, img, alt } = props
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <img src={img} alt={alt} />
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
