import React from "react";
import Card from "../Card/Card";
import Info from "../Info/Info";

function Profile({ order }) {
  return (
    <>
      <h1>Мои заказы</h1>

      {order.length > 0 ? (
        <div className="cards">
          {order.map((orderitem) => (
            <>
              <p>{orderitem.created_at}</p>
              {orderitem.cards.map((item) => (
                <Card
                  key={orderitem.cards.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  // onClickAddCart={() => handleAddCart(favoriteItem)}
                  // onClickAddFavorite={() => handleAddToFavorite(favoriteItem)}
                  fav={true}
                />
              ))}
            </>
          ))}
        </div>
      ) : (
        <Info
          // infoImg={infoImg}
          description={"Вы не делали никаких заказов"}
        />
      )}
    </>
  );
}
export default Profile;
