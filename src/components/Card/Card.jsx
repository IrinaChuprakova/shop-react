import React from 'react';
import './Card.css';
import {AppContext} from '../../App'

function Card({ id,img, name, price, onClickAddCart, onClickAddFavorite, fav = false}) {
  const {itemIsAdedd} = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(fav);

  const handleClickAddCart = () => {
    onClickAddCart()
  }

  const handleClickAddFavorite = () => {
    setIsFavorite(!isFavorite)
    onClickAddFavorite()
  }
  
  return (
    <div className="card">
      <button
        className={isFavorite ? "card__favorite card__favorite_active" : "card__favorite card__favorite_inactive"}
        onClick={handleClickAddFavorite}></button>
      <img className="card__img" src={img} alt="Изображение сумки" />
      <p className="card__name">{name}</p>
      <div className="card__box">
        <div className="card__container">
          <span>Цена:</span>
          <span>{price} руб.</span>
        </div>
        <button 
          className={itemIsAdedd(id) ? "card__btn card__btn-add_active" : "card__btn card__btn-add_inactive"}
          onClick={handleClickAddCart}></button>
      </div>
    </div>
  )
}

export default Card;