import React from 'react';
import './Card.css';

function Card({ img, name, price, onClickAddCart, onClickAddFavorite, fav = false, added = false }) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(fav);

  const handleClickAddCart = () => {
    setIsAdded(!isAdded)
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
          className={isAdded ? "card__btn card__btn-add_active" : "card__btn card__btn-add_inactive"}
          onClick={handleClickAddCart}></button>
      </div>
    </div>
  )
}

export default Card;