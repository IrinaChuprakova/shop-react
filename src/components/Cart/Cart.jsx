import './Cart.css';
import cartEmpty from '../../images/cartEmpty.png';
import Info from '../Info/Info';

function Cart({ cartData, onClickCloseCart,onDeletItemCart,handleOrder }) {
  const delivery = 1000
  const totalprice = cartData.reduce((sum,obj) => obj.price + sum,0) + delivery
  
  return (
    <div className="overlay">
      <div className="cart">
      {
        cartData.length > 0 ? (
          <>
          <div className="cart__container">
          <h2 className="cart__header">Корзина</h2>
          <button onClick={onClickCloseCart} className="btnClose"></button>
        </div>
        <ul className="cart__list ul-clear">
        {
          cartData.map((cartItem) => (
            <li className="cart__list-item" key={cartItem.id}>
            <img className="cart__img" src={cartItem.img} alt="Изображенмк сумка" />
            <div>
              <p className="cart__description">{cartItem.name}</p>
              <span className="cart__price">{cartItem.price} руб</span>
            </div>
            <button className="cart__btn" onClick={() => onDeletItemCart(cartItem.id)}></button>
          </li>
          ))
        }
        </ul>
        <ul className="ul-clear top-20">
          <li className="d-flex">
            <span>Доставка:</span>
            <div className="line"></div>
            <span>{delivery} руб.</span>
          </li>
          <li className="d-flex">
            <span>Итого:</span>
            <div className="line"></div>
            <span>{totalprice}</span>
          </li>
        </ul>
        <button className="cart__order-btn" onClick={() =>handleOrder(cartData)}>Оформить заказ</button>
          </>
        ) : 
        (

          <Info
          infoHeader={'Корзина пуста'}
          infoImg={cartEmpty}
          description={'Добавьте хотя бы одну сумку, чтобы сделать заказ.'}
          onClickBack={onClickCloseCart}
        /> 
        )
      }
      </div>
    </div>
  );
}
export default Cart;