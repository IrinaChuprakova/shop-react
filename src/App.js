import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import search from "../src/images/search.svg";
import Cart from "../src/components/Cart/Cart";



function App() {
  const [cartOpen, setCartOpen] = React.useState(false)
  const [data, setData] = React.useState([]);
  const [cartData, setCartCata] = React.useState([]);

  React.useEffect( () => {
    fetch('https://642fd980b289b1dec4bb7260.mockapi.io/market/cards')
      .then( res => res.json())
      .then( json => setData(json))
      .catch( err => console.log(err))
  },[])

  const handleAddCart = (card) => {
    setCartCata([...cartData,card])
  }

  return (
    <div className="wrapper">
    {cartOpen  && <Cart cartData={cartData} onClickCloseCart={()=> setCartOpen(false)}/>}
    <Header onClickOpenCart={()=> setCartOpen(true)}/>
    <main className="main">
    <div className="search d-flex">
      <h1 className="hh1">Все сумки</h1>
      <div className="search__input d-flex">
      <img className="search__img" src={search} alt="search"/>
      <input placeholder="Поиск..." />
      </div>
    </div>
    <div className="cards">
      {
        data.map((card) => (
          <Card 
            key={card.id}
            img={card.img}
            name={card.name}
            price={card.price}
            onClickAddCart={ ()=> handleAddCart(card)}
          />
        ))
      }
    </div>

    </main>
    
    </div>
  );
}

export default App;

