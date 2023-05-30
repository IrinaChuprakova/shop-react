import React from "react";
import Card from "../Card/Card";

function Profile({ favoriteData, handleAddCart,handleAddToFavorite}) {
  return (
    <h1>Мои заказы</h1>
    // {
    //   uslovie ? (
    //     <div className="cards">
    //     {favoriteData.map((favoriteItem) => (
    //       <Card
    //         key={favoriteItem.id}
    //         img={favoriteItem.img}
    //         name={favoriteItem.name}
    //         price={favoriteItem.price}
    //         onClickAddCart={() => handleAddCart(favoriteItem)}
    //         onClickAddFavorite={() => handleAddToFavorite(favoriteItem)}
    //         fav={true}
    //       />
    //     ))}
    //   </div>
    //   ) :(
    //     <div className="empty">
    //     <p className="empty__description">Вы ничего не добавляли в закладки</p>
    //     <button className="empty__btn btn" onClick={()=> navigate(-1)}>Назад</button>
    //     </div>
    //   )
    // }
    
  );
}
export default Profile;