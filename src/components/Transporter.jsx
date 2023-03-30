import React from "react";
import style from "./Transporter.module.css";

import trans from "../asset/trans.jpg";
import driver from "../asset/driver.jpg";

export default function Transporter() {
  return (
    <section className={style.transport}>
      <div className="container">
        <div>
          <span className="highlighted">The Transporters</span>
          <h3>Meet Expert Team</h3>
        </div>
        <div className="images">
          <img src={} alt="photo" />
          <img src={trans} alt="photo" />
          <img src={driver} alt="photo" />
        </div>
      </div>
    </section>
  );
}
