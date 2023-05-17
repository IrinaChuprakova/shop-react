import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';
import favorite from '../../images/favorite.svg';
import profile from '../../images/profile.svg';

function Header({ onClickOpenCart }) {
  return (
    <header className="header">
      <NavLink to="/"> <img src={logo} alt="Логотип"></img> </NavLink>
      <ul className="header__nav ul-clear">
        <li onClick={onClickOpenCart} className="header__nav-item">
          <img className="header__icon" src={cart} alt="Корзина" />
          <span className="cart-price">1205 rub.</span>
        </li>
        <NavLink to="/favorites">
          <li className="header__nav-item"><img className="header__icon" src={favorite} alt="Избранное" /></li>
        </NavLink>
        <NavLink to="/orders">
        <li className="header__nav-item"><img className="header__icon" src={profile} alt="Профиль" /></li>
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;