import React from "react";
import style from "./Contact.module.css";
import email from "../asset/email.svg";
import phone from "../asset/phone.svg";
import time from "../asset/time.svg";
import green from "../asset/green.jpg";
import norto from "../asset/norto.jpg";
import points from "../asset/points.jpg";
import sandbox from "../asset/sandbox.jpg";

export default function Contact() {
  return (
    <section className={style.contact}>
      <div className="container">
        <span className="highlighted">Contact</span>
        <div className={style.connect}>
          <div className={style.reach}>
            <h2>Get in touch with us</h2>
            <p>
              Leverage agile frameworks to provide a robust <br /> synopsis for
              strategies foster collaborative <br /> thinking to further the
              overall value.
            </p>
            <ul className={style.list}>
              <li>
                <img src={email} alt="email" />
                Email
                <br />
                contact@logistics.com
              </li>
              <li>
                <img src={phone} alt="phone" />
                Call Us
                <br />
                (00) 112 365 489
              </li>
              <li>
                <img src={time} alt="time" />
                Mon - Sat 9.00 - 18.00
                <br />
                Sunday Closed
              </li>
            </ul>
          </div>
          <form>
            <input type="text" placeholder="Your name*" />
            <input type="text" placeholder="Email*" />
            <input type="text" placeholder="Phone number*" />
            <input type="text" placeholder="City*" />
            <textarea
              id="Message"
              cols="30"
              rows="10"
              placeholder="Your Message*"
            ></textarea>
            <button>Submit Message</button>
          </form>
        </div>
        <div className={style.img}>
          <img src={green} alt="green" />
          <img src={norto} alt="norto" />
          <img src={points} alt="point" />
          <img src={sandbox} alt="sandbox" />
        </div>
      </div>
    </section>
  );
}
