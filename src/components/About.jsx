import React from "react";
import ship from "../asset/ship.svg";
import icon from "../asset/Icon (2).svg";
import style from "./About.module.css";
import ware from "../asset/ware.svg";
import van from "../asset/van.svg";

export default function About() {
  return (
    <section className={style.about}>
      <div className="container">
        <div>
          <span className="highlighted"> What Do We Do</span>
          <h2>
            Safe & Reliable <br />
            Cargo Solutions
          </h2>
        </div>
        <div className={style.grid}>
          <div>
            <img src={ship} alt="ship" />
            <h4>Sea Transport Services</h4>
            <p>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
          <div className={style.content}>
            <img src={ware} alt="icon" />
            <h4>Warehousing Services</h4>
            <p>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
          <div>
            <img src={icon} alt="icon" />
            <h4>Air Flight Services</h4>
            <p>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
          <div>
            <img src={van} alt="van" />
            <h4>Local Shipping Services</h4>
            <p>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
