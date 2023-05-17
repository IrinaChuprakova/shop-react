import React from "react";
import Card from "../Card/Card";
function Favorites({ favoriteData, handleAddCart,handleAddToFavorite,fav}) {
  return (
    <>
      <h1>Мои закладки</h1>
      <div className="cards">
        {favoriteData.map((favoriteItem) => (
          <Card
            key={favoriteItem.id}
            img={favoriteItem.img}
            name={favoriteItem.name}
            price={favoriteItem.price}
            onClickAddCart={() => handleAddCart(favoriteItem)}
            onClickAddFavorite={() => handleAddToFavorite(favoriteItem.id)}
            fav={true}
          />
        ))}
      </div>
    </>
  );
}
export default Favorites;
