// src/pages/Contato.js
import React from 'react';
import emailjs from 'emailjs-com';
import './Contato.css';

export default function Contato() {
  const userID = process.env.REACT_APP_USER_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      serviceID,
      templateID,
      e.target,
      userID
    )
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    e.target.reset();
  }

  return (
    <div className="form_wrapper">
      <form onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="from_name" placeholder="Jack Sparrow" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="sparrow@email.com" />
        <label>Téléphone</label>
        <input type="tel" name="phone" placeholder="987654321" />
        <label>Sujet</label>
        <input type="text" name="subject" placeholder="Black pearl" />
        <label>Message</label>
        <textarea name="message" rows="5" placeholder="Wherever we want to go, we'll go" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
