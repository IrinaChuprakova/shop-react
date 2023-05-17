import './Cart.css';
import cartEmpty from '../../images/cartEmpty.png';

function Cart({ cartData, onClickCloseCart,onDeletItemCart }) {
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
            <span>500 руб.</span>
          </li>
          <li className="d-flex">
            <span>Итого:</span>
            <div className="line"></div>
            <span>22500 руб.</span>
          </li>
        </ul>
        <button className="cart__order-btn">Оформить заказ</button>
          </>
        ) : 
        (
          <div className="cartEmpty">
          <img src={cartEmpty} alt="Корзина пуста" className="cartEmpty__img"/>
          <h3 className="cartEmpty__header">Корзина пуста</h3>
          <p className="cartEmpty__description">Добавьте хотя бы одну сумку, чтобы сделать заказ.</p>
          <button onClick={onClickCloseCart} className="cartEmpty__btn"> &#8701; Вернуться назад </button>
          </div>
        )
      }
      </div>
    </div>
  );
}
export default Cart;
