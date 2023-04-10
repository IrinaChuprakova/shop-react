function Cart({ cartData, onClickCloseCart }) {
  return (
    <div className="overlay">
      <div className="cart">
        <div className="xer">
          <h2 className="cart__header">Корзина</h2>
          <button onClick={onClickCloseCart} className="btnClose"></button>
        </div>
        <ul className="cart__list ul-clear">
        {
          cartData.map((cartItem) => (
            <li className="cart__list-item d-flex">
            <img className="cart__img" src={cartItem.img} alt="" />
            <div>
              <p className="cart__description">{cartItem.name}</p>
              <span className="cart__price">{cartItem.price} руб</span>
            </div>
            <button className="cart__btn"></button>
          </li>
          ))
        }
        </ul>
        <ul className="ul-clear">
          <li className="d-flex">
            <span>Доставка:</span>
            <div className="line"></div>
            <span>500 руб.</span>
          </li>
          <li className="d-flex">
            <span>Итого:</span>
            <div className="line"></div>
            <span>22500 руб.</span>
          </li>
        </ul>
        <button className="cart__butn">Оформить заказ</button>
      </div>
    </div>
  );
}
export default Cart;
