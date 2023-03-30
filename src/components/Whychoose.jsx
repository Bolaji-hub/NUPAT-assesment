import React from "react";
import aero from "../asset/aero.png";
import style from "./Whychoose.module.css";
import box from "../asset/box.svg";
import globe from "../asset/globe.svg";
import clock from "../asset/clock.svg";
import port from "../asset/port.svg";
import call from "../asset/call.svg";
import price from "../asset/price.svg";

export default function Whychoose() {
  return (
    <section className={style.why}>
      <div className={style.overlay}>
        <img src={aero} alt="png" />
      </div>
      <div className={style.choose}>
        <span className="highlighted"> Why Choose</span>
        <h2>We create opportunity to reach potential</h2>
        <p>
          Leverage agile frameworks to provide a robust synopsis for <br />{" "}
          strategy foster collaborative thinking to further the overall value{" "}
          <br />
          proposition.
        </p>
        <div className={style.grid}>
          <div className={style.box}>
            <img src={box} alt="" />
            <span>Safe Packing</span>
          </div>
          <div>
            <img src={clock} alt="" />
            <span>In Time Delivery</span>
          </div>
          <div className={style.globe}>
            <img src={globe} alt="" />
            <span>Global Tracking</span>
          </div>
          <div>
            <img src={call} alt="" />
            <span>24/7 Support</span>
          </div>
          <div>
            <img src={port} alt="" />
            <span>Ship Everyware</span>
          </div>
          <div>
            <img src={price} alt="" />
            <span>Transparent Pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
