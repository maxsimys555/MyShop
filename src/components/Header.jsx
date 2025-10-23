import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import zvonok from "../assets/zvonok.png";
import bags from "../assets/bags.png";
import HeaderSearch from "../instruments/HeaderSearch";

export default function Header() {
  return (
    
    <header >
      <div className="logo">
        <img src={logo}   />
      </div>
      <nav className="menu" >
        <Link to="/">Главная</Link>
        <Link to="/shop">Магазин</Link>
        <Link to="/about">О бренде</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
      <button className="telephone">
        <img src={zvonok} alt="Позвонить"  />
      </button>
      <div className="number">+7 (495) 823-54-12</div>
      <HeaderSearch/>
      <button className="bags">
        <img src={bags} alt="Корзина"  />
      </button>
      
    </header>
  );
}