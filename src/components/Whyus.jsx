import React from "react";
import style from "./Whyus.module.css";
import Images from "../asset/Images.jpg";
import delivery from "../asset/delivery.svg";
import cost from "../asset/cost.svg";
import photo from "../asset/Photo.jpg";
import packing from "../asset/Packing.jpg";
import contract from "../asset/contract.jpg";
import warehouse from "../asset/warehouse.jpg";
import trailer from "../asset/trailer.jpg";
import ocean from "../asset/ocean.jpg";
export default function Whyus() {
  return (
    <section className={style.whyus}>
      <div className="container">
        <div className={style.whatWeProvide}>
          <div className={style.overview}>
            <div>
              <span className="highlighted">Why Us</span>
              <h2>
                We provide full range global <br /> logistics solution
              </h2>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value preposition.
              </p>
              <p>
                Organically grow the holistic World view of distruptive
                innovation via workplace diversity and empowerment.
              </p>
              <div className={style.logo}>
                <img src={delivery} alt="icon" />
                <span>Delivery On Time</span>
              </div>
              <div className={style.logo}>
                <img src={cost} alt="icon" />
                <span>Optimized Travel Cost</span>
              </div>
            </div>
            <img src={Images} alt="img" />
          </div>

          <div className={style.summary}>
            <h2>1294</h2>
            <span>Delivered Packages</span>
            <h2>3594</h2>
            <span>Satisfied Clients</span>
          </div>
        </div>
      </div>

      <div className={style.transport}>
        <h2>Transporting Across The World</h2>
      </div>
      <div className={style.images}>
        <figure>
          <img src={photo} alt="liquid transport" />
          <figcaption>
            <h4>Liquid Transport</h4>
            <p>Premium Tankers</p>
          </figcaption>
        </figure>
        <figure>
          <img src={packing} alt="Packing Solutions" />
          <figcaption>
            <h4>Packing Solutions</h4>
            <p>Warehouse Management</p>
          </figcaption>
        </figure>
        <figure>
          <img src={trailer} alt="Contract Logistics" />
          <figcaption>
            <h4>Contract Logistics</h4>
            <p>Road Transportation</p>
          </figcaption>
        </figure>
        <figure>
          <img src={contract} alt="alt" />
          <figcaption>
            <h4>Warehouse & Distribution</h4>
            <p>Large Warehouse</p>
          </figcaption>
        </figure>
        <figure>
          <img src={ocean} alt="Specialized Transport" />
          <figcaption>
            <h4>Specialized Transport</h4>
            <p>Ocean Transport</p>
          </figcaption>
        </figure>
      </div>
      <button className="dot">More Work</button>
    </section>
  );
}
