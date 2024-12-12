function CartWidget(props) {
    const{img, alt}=props;
  return (
    <div className="cart">
        <img src={img} alt={alt} /><p className="cart-text">0</p></div>
  )
}

export default CartWidget