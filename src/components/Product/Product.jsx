import React from 'react';
import Card from '../Card/Card';
import search from '../../images/search.svg';
import clear from '../../images/close.svg';
import img1 from '../../images/slder-img1.jpg'
import img2 from '../../images/slder-img2.jpg'
import img3 from '../../images/slder-img3.jpg'
import img4 from '../../images/slder-img4.jpg'

function Product({ data, handleAddCart, handleAddToFavorite, favoriteData }) {
  const [searchValue, setSearchValue] = React.useState('');

  const onSearchInput = (evt) => {
    setSearchValue(evt.target.value)
  }

  const image = [img1, img2, img3, img4]
  const [activeIndex, setActiveIndex] = React.useState(0);

  const previous = () => {
    activeIndex - 1 < 0 ? setActiveIndex(image.length - 1) : setActiveIndex(activeIndex - 1)
  }

  const next = () => {
    image.length === activeIndex + 1 ? setActiveIndex(0) : setActiveIndex(activeIndex + 1)
  }

  return (
    <>
      <div className="slider">
        <img className="slider__image" src={image[activeIndex]} alt="Баннер с сумками" />
        <div className="slider__group-btn">
        <button className="slider__btn" onClick={previous}>&#8249;</button>
        <button className="slider__btn" onClick={next}>&#8250;</button>
        </div>
      </div>

      <div className="search">
        <h1 className='search__header'>{searchValue ? `По запросу «${searchValue}» найдено` : 'Все сумки'}</h1>
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
                fav={favoriteData.some(obj => obj.id === card.id)}
              />
            ))
        }
      </div>
    </>
  )

}
export default Product;