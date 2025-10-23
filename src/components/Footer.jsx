import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import visa from "../assets/visa.png";
export default function Footer() {
  return (
    <footer >
      <section className="footer_top">
        <div className="logo_low">
          <img src={logo}  />
        </div>
        <nav className="menu_low" >
          <Link to="/">Главная</Link>
          <Link to="/shop">Магазин</Link>
          <Link to="/about">О бренде</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
        <div className="contacts_low">
            <p>+7 (495) 823-54-12</p>
            <p>hello@womazing.com</p>
        </div>
      </section>
      <section className="footer_bottom">
        <div className="license">
          <p>© Все права защищены</p>
          <p>Политика конфиденциальности</p>
          <p>Публичная оферта</p>
        </div>  
        <div className="footer_product">
          <p>Пальто</p> 
          <p>Свитшоты</p>
          <p>Кардиганы</p>
          <p>Толстовки</p>
        </div>
        <div className="social_visa">
          <div className="sociality">
          <a href="https://instagram.com" alt="Кнопка-ссылка" className="instagram">
            <img src={instagram}  />
          </a>

          <a href="https://facebook.com" alt="Кнопка-ссылка" className="facebook">
            <img src={facebook}  />
          </a>
            
          <a href="https://twitter.com" alt="Кнопка-ссылка" className="twitter">
            <img src={twitter}  />
          </a>
        </div>
        <div className="visa">
          <img src={visa}  />
        </div>
      </div>
    </section>
  </footer>
  );
}