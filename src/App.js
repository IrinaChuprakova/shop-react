import React from 'react';
import Header from './components/Header/Header';
import Cart from '../src/components/Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import Product from './components/Product/Product';
import Profile  from './components/Profile/Profile';

export const AppContext = React.createContext({});

function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [cartData, setCartCata] = React.useState([]);
  const [favoriteData, setFavoriteData] = React.useState([]);
  const [order,setOrder] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8080/api/cards")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
    fetch("http://localhost:8080/api/cards/cart")
      .then((res) => res.json())
      .then((json) => {
        if (json !== null) {
          setCartCata(json);
        }
      })
      .catch((err) => console.log(err));
    fetch("http://localhost:8080/api/cards/favorite")
      .then((res) => res.json())
      .then((json) => {
        if (json !== null) {
          setFavoriteData(json);
        }
      })
      .catch((err) => console.log(err));
    fetch("http://localhost:8080/api/cards/order")
      .then((res) => res.json())
      .then((json) => {setOrder(json);})
      .catch((err) => console.log(err));
  }, []);

  console.log(order);

  const handleAddCart = (card) => {
    if (cartData.find((item) => item.id === card.id)) {
      handleDeletItemCart(card.id);
    } else {
      fetch("http://localhost:8080/api/cards/cart", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(card),
      });
      setCartCata([...cartData, card]);
    }
  };

  const handleDeletItemCart = (id) => {
    fetch(`http://localhost:8080/api/cards/cart/${id}`, {
      method: "DELETE",
    });
    setCartCata((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDeleteFavorite = (id) => {
    fetch(`http://localhost:8080/api/cards/favorite/${id}`, {
      method: "DELETE",
    });
    setFavoriteData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddToFavorite = (card) => {
    if (favoriteData.find((item) => item.id === card.id)) {
      handleDeleteFavorite(card.id);
    } else {
      fetch("http://localhost:8080/api/cards/favorite", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(card),
      });
      setFavoriteData([...favoriteData, card]);
    }
  };

  const itemIsAdedd = (id) => {
    return cartData.some(obj => obj.id === id)
  }

  const handleOrder = (cartData) => {
    fetch("http://localhost:8080/api/cards/order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cartData)
   })}
   console.log(cartData)
   // cartData.map( (item) => (
    //   fetch("http://localhost:8080/api/cards/order", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify(item),
    //   })
    // ))

  return (
    <AppContext.Provider value={{data, cartData, favoriteData,itemIsAdedd}}>
          <div className="wrapper">
      {cartOpen && (
        <Cart
          cartData={cartData}
          onClickCloseCart={() => setCartOpen(false)}
          onDeletItemCart={handleDeletItemCart}
          handleOrder={handleOrder}
        />
      )}
      <Header onClickOpenCart={() => setCartOpen(true)} />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Product
                data={data}
                handleAddCart={handleAddCart}
                handleAddToFavorite={handleAddToFavorite}
                cartData={cartData}
                favoriteData={favoriteData}
              />
            }
          >
          </Route>
          <Route
            path="favorites"
            element={
              <Favorites
                favoriteData={favoriteData}
                cartData={cartData}
                handleAddCart={handleAddCart}
                handleAddToFavorite={handleAddToFavorite}
              />
            }
          >
          </Route>
          <Route
            path="orders"
            element={
              <Profile
              order={order}
              />
            }>
          </Route>
        </Routes>
      </main>
    </div>
    </AppContext.Provider>
  );
}

export default App;