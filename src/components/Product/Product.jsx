import React from 'react';
import Card from '../Card/Card';
import search from '../../images/search.svg';
import clear from '../../images/close.svg';

function Product({data, handleAddCart, handleAddToFavorite,cartData,favoriteData}) {
  const [searchValue, setSearchValue] = React.useState('');

  const onSearchInput = (evt) => {
    setSearchValue(evt.target.value)
  }

  return (
    <>
      <div className="search">
        <h1>{searchValue ? `По запросу «${searchValue}» найдено` : 'Все сумки'}</h1>
        <div className="search__container">
          <img className="search__img" src={search} alt="search" />
          <input className="search__input" placeholder="Поиск..." onChange={onSearchInput} value={searchValue} />
          {
            searchValue && <img className="clear__img" src={clear} alt="clear" onClick={() => { setSearchValue('') }} />
          }
        </div>
      </div>
      <div className="cards">
        {
          data.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((card) => (
              <Card
                key={card.id}
                id={card.id}
                img={card.img}
                name={card.name}
                price={card.price}
                onClickAddCart={() => handleAddCart(card)}
                onClickAddFavorite={() => handleAddToFavorite(card)}
                fav = {favoriteData.some(obj => obj.id === card.id)}
              />
            ))
        }
      </div>
    </>
  )

}
export default Product;