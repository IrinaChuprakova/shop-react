import './Card.css';
import React
 from 'react';
function Card({img, name, price, onClickAddCart}){
  const [isAdded, setIsAdded] = React.useState(false);

  const handleClickAddCart = () =>{
    setIsAdded(!isAdded)
    onClickAddCart()
  }

  return(
    <div className="card">
      {/* <button></button> */}
      <img className="card__img" src={img} alt="" />
      <p>{name}</p>
      <div className="card__box">
        <div className="card__container">
          <span>Цена:</span>
          <span>{price} руб.</span>
        </div>
        <button className={isAdded ?  "btn2" : "btn"} onClick={handleClickAddCart}></button>
      </div>
    </div>
  )
}

export default Card;