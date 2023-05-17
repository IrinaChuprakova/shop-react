import React from "react";
import Header from "./components/Header/Header";
import Cart from "../src/components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import Product from "./components/Product/Product"

function App() {
  const [cartOpen, setCartOpen] = React.useState(false)
  const [data, setData] = React.useState([]);
  const [cartData, setCartCata] = React.useState([]);
  const [favoriteData, setFavoriteData] = React.useState([]);

  React.useEffect( () => {
    fetch('https://642fd980b289b1dec4bb7260.mockapi.io/market/cards')
      .then( res => res.json())
      .then( json => setData(json))
      .catch( err => console.log(err));
      fetch('https://642fd980b289b1dec4bb7260.mockapi.io/market/cart')
      .then( res => res.json())
      .then( json => setCartCata(json))
      .catch( err => console.log(err))
  },[])



  const handleAddCart = (card) => {
    if (cartData.find(item => item.id === card.id)) {
      handleDeletItemCart(card.id)
    }
    else {
      fetch('https://642fd980b289b1dec4bb7260.mockapi.io/market/cart', {
        method:'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(card)
      })
        setCartCata([...cartData,card]) 
    }
  }

  const handleDeletItemCart = (id) =>{
    fetch(`https://642fd980b289b1dec4bb7260.mockapi.io/market/cart/${id}`, {
      method:'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      // body: JSON.stringify(card)
    })
    setCartCata((prev) => prev.filter(item => item.id !== id)) 
  }

  const handleDeleteFavorite = (card) => {

  }

  const handleAddToFavorite = (card) => {
    if (favoriteData.find(item => item.id === card.id )){
      console.log('lox')
    }
    else {
      setFavoriteData([...favoriteData,card])
    }
    
  }

  return (
    <div className="wrapper">
    {cartOpen  && <Cart cartData={cartData} onClickCloseCart={()=> setCartOpen(false)} onDeletItemCart={handleDeletItemCart}/>}
    <Header onClickOpenCart={()=> setCartOpen(true)}/>
    <main className="main">
    <Routes>
      <Route path="/" element={<Product 
        data={data}
        handleAddCart={handleAddCart}
        handleAddToFavorite={handleAddToFavorite}
        cartData={cartData}
      />}> </Route>
      <Route path="favorites" element={<Favorites favoriteData={favoriteData}  handleAddCart={handleAddCart} handleAddToFavorite={handleAddToFavorite}/>}> </Route>
      </Routes>
    </main>
    </div>
  );
}

export default App;

