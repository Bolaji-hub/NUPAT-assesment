import React from "react";
import style from "./TopNav.module.css";
import logo from "../asset/logo.svg";
import time from "../asset/time.svg";
import email from "../asset/email.svg";
import phone from "../asset/phone.svg";

export default function TopNav() {
  return (
    <nav className={style.topNav}>
      <ul className={`container ${style.ul}`}>
        <li className={style.logo}>
          <img src={logo} alt="logo" />
        </li>

        <li>
          <img src={time} alt="time" />
          Mon - Sat 9.00 - 18.00
          <br />
          Sunday Closed
        </li>
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
      </ul>
    </nav>
  );
}
