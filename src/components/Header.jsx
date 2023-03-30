import React from "react";
import style from "./Header.module.css";
import instagram from "../asset/Instagram.svg";
import facebook from "../asset/Facebook.svg";
import Twitter from "../asset/Twitter.svg";
import Linkdin from "../asset/Linkdin.svg";

export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className="container">
          <ul className={style.localLinks}>
            <li>Home</li>
            <li>About</li>
            <li>Pages</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
          <ul className={style.socialLinks}>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={Twitter} alt="Twitter" />
            </li>
            <li>
              <img src={Linkdin} alt="Linkdin" />
            </li>
          </ul>
          <button>Request Quote</button>
        </div>
      </nav>
      <div className={`container ${style.main}`}>
        <span className="highlighted">Logistics & Supply Chain Solutions</span>
        <h1>
          Your Gateway
          <br /> to any Destination in the World
        </h1>
        <p>
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.
        </p>

        <button className="dot">Explore More</button>
      </div>
    </header>
  );
}
