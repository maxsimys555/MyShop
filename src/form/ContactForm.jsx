import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [success, setSuccess] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправка формы:", form);

    
    setSuccess(true);

    
    setForm({ name: "", email: "", phone: "", message: "" });

    
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    
    <form onSubmit={handleSubmit} className="form_for_contacts">
      <h3>Напишите нам</h3>

      <input type="text" name="name" placeholder="Имя" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      

      <input type="email" name="email" placeholder="E-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
      

      <input type="tel" name="phone" placeholder="Телефон" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      

      <textarea name="message" placeholder="Сообщение" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      

      <button className="submit_form" type="submit">Отправить</button>

      {success && (
        <div className="submit_complected">
          Сообщение успешно отправлено
        </div>
      )}
    </form>
     
      
      )};
    
