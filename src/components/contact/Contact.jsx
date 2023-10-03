import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div >
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input type="text " placeholder="email" />
            <textarea placeholder="message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I will reply ASAP :) </span>}
          </form>
        </div>
      </div>
      <footer>All right Reserved &copy;</footer>
    </div>
  );
};

export default Contact;
