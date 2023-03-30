import React from "react";
import style from "./Testimonial.module.css";
import Aerrow from "../asset/Aerrow.svg";
import user1 from "../asset/user 1.png";
import user2 from "../asset/user2.png";
import quote from "../asset/quote.svg";
import star1 from "../asset/Star1.svg";

export default function Testimonial() {
  return (
    <section className={style.testimony}>
      <div className="container">
        <span className="highlighted">Testimonial</span>
        <div className={style.say}>
          <h2>What Our Customer Say</h2>
          <img src={Aerrow} alt="svg" />
        </div>
        <div className={style.users}>
          <Testimony
            photo={user1}
            name="Kathleen Smith"
            company="Fuel Company"
            testimony="Leverage agile framework to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of distruptive innovation via workplace diversity and empowerment"
            stars={5}
          />
          <Testimony
            photo={user2}
            name="John Martin"
            company="Restoration Company"
            testimony="
            Leverage agile framework to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of
            distruptive innovation via workplace diversity and empowerment"
            stars={5}
          />
        </div>
      </div>
    </section>
  );
}

function Testimony(props) {
  return (
    <div className={style.card}>
      <div className={style.profile}>
        <img src={props.photo} alt={props.name} />
        <div>
          <h5>{props.name}</h5>
          <span>{props.company}</span>
        </div>
        <span className={style.quote}>
          <img src={quote} alt="svg" />
        </span>
      </div>
      <p>{props.testimony}</p>
      <div className={style.stars}>
        {Array(props.stars)
          .fill()
          .map((_, i) => (
            <img src={star1} key={i} alt="svg" />
          ))}
      </div>
    </div>
  );
}
