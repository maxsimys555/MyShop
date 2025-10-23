import ContactMap from "../instruments/map";
import "../styles/contacts.css";
import ContactForm from "../form/ContactForm";

export default function сontacts() {
  return (
    <section>
      <div className="main_description">
        <h1>Контакти</h1>
        <h4>Главная — Контакты</h4>
      </div>
      

      {/* КАРТА */}
      <ContactMap/>

      <table className="table_contacts">
        <thead className="thead_contacts">
          <tr>
            <th>Телефон</th>
            <th>E-mail</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          <td>+7 (495) 823-54-12</td>
          <td>info@sitename.com</td>
          <td>г. Москва, 3-я улица Строителей, 25</td>
        </tbody>
      </table>
      <ContactForm />
    </section>
  );
}
