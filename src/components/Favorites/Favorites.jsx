import React from "react";
import Card from "../Card/Card";
function Favorites({ favoriteData, handleAddCart,handleAddToFavorite}) {
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
        <div>
        <p>Вы ничего не добавляли в закладки</p>
        <button>Назад</button>
        </div>
      )}
      
    </>
  );
}
export default Favorites;
