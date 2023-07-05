import React from "react";
import Info from "../Info/Info";
import infoImg from "../../images/ordersEmpty.png";

function Profile({ order }) {
  return (
    <>
      <h1>Мои заказы</h1>

      {order.length > 0 ? (
        <>
          {order.map((orderitem) => (
            <div className="order">
              <p className="order__date">{orderitem.created_at}</p>
              <div className="cards">
              {orderitem.cards.map((item) => (
                <div className="card">
                  <img className="card__img" src={item.img} alt="Изображение сумки" />
                  <p className="card__name">{item.name}</p>
                  <div className="card__box">
                    <div className="card__container">
                      <span>Цена:</span>
                      <span>{item.price} руб.</span>
                    </div>
                  </div>
                </div>
              ))}
              </div>
             </div> 
          ))}
        </>
      ) : (
        <Info
          infoImg={infoImg}
          description={"Вы не делали никаких заказов"}
        />
      )}
    </>
  );
}
export default Profile;

