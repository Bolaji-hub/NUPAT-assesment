import React from "react";
import style from "./Transporter.module.css";
import pilot from "../asset/pilot.jpg";
import trans from "../asset/trans.jpg";
import driver from "../asset/driver.jpg";

export default function Transporter() {
  return (
    <section className={style.transport}>
      <div className="container">
        <div className={style.header}>
          <span className="highlighted">The Transporters</span>
          <h3>Meet Expert Team</h3>
        </div>
        <div className={style.list}>
          <figure>
            <img src={pilot} alt="photo" />
            <figcaption>
              <h4>Jessica Arrow</h4>
              <p>Designer</p>
            </figcaption>
          </figure>
          <figure>
            <img src={trans} alt="photo" />
            <figcaption>
              <h4>Kathleen Smith</h4>
              <p>Designer</p>
            </figcaption>
          </figure>
          <figure>
            <img src={driver} alt="photo" />
            <figcaption>
              <h4>Rebecca Tylor</h4>
              <p>Designer</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
