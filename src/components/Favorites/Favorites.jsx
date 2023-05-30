import React from "react";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

function Favorites({ favoriteData, handleAddCart,handleAddToFavorite}) {
  const navigate = useNavigate();

  return (
    <>
      <h1>Мои закладки</h1>
      {favoriteData.length>0 ? (
        <div className="cards">
        {favoriteData.map((favoriteItem) => (
          <Card
            key={favoriteItem.id}
            img={favoriteItem.img}
            name={favoriteItem.name}
            price={favoriteItem.price}
            onClickAddCart={() => handleAddCart(favoriteItem)}
            onClickAddFavorite={() => handleAddToFavorite(favoriteItem)}
            fav={true}
          />
        ))}
      </div>
      ) : (
        <div className="empty">
        <p className="empty__description">Вы ничего не добавляли в закладки</p>
        <button className="empty__btn btn" onClick={()=> navigate(-1)}>Назад</button>
        </div>
      )}
      
    </>
  );
}
export default Favorites;
