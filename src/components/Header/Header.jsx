import './Header.css';
import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';
import favorite from '../../images/favorite.svg';
import profile from '../../images/profile.svg';

function Header({onClickOpenCart}) {
  return (
    <header className="header">
      <img src={logo} alt="logo"></img>
        <ul className="header__nav ul-clear">
          <li onClick={onClickOpenCart} className="header__nav-item"> <img className="icon" src={cart} alt="cart" /> 
            <span className="cart-price">1205 rub.</span>
          </li>
          <li className="header__nav-item"> <img className="icon" src={favorite} alt="favorite"/> </li>
          <li className="header__nav-item"> <img className="icon" src={profile} alt="profile"/> </li>
        </ul>  
    </header>
    );
  }

export default Header;