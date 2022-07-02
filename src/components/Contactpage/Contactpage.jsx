import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactpage.css";
import "../../components/loginsignup/login.css";
import "../../App.css";
const Contactpage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_krmmbp5",
        "template_17stpdi",
        form.current,
        "nqvABDIF3cvxfmdgp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const Remover_Text = () => {
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  };
  return (
    <>
      <div className="form__box">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <h3 className="h3">CONTACT ME</h3>
          <div className="mb-3">
            <label className="text">Name</label>
            <input
              id="name"
              placeholder="Enter Your Name"
              className="form-control"
              type="text"
              name="user_name"
            />
          </div>
          <div className="mb-3">
            <label className="text">Email</label>
            <input
              id="email"
              placeholder="Enter your Email"
              className="form-control"
              type="email"
              name="user_email"
            />
          </div>
          <div className="mb-3">
            <label className="text">Message</label>
            <textarea
              id="message"
              placeholder="Enter Your Text"
              className="form-control"
              name="message"
            />
          </div>
          <div className="d-grid">
            <input
              className="btn__form2"
              type="submit"
              value="Send"
              onClick={Remover_Text}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contactpage;
