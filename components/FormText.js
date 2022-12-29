import React from "react";
import formTextStyles from "../styles/components/FormText.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FormText = () => {
  return (
    <div className={formTextStyles.cardHeading}>
      <div>
        <h2>Hablemos, envíanos un mensaje.</h2>
      </div>

      <div className={formTextStyles.footprint}>
        <div>
          <FontAwesomeIcon icon={faEnvelopesBulk} />
          {"  "}
          <a href="emailto:juanjolar30@gmail.com"></a>
        </div>

        <div>
          <FontAwesomeIcon icon={faFacebookF} />
        </div>

        <div>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
};

export default FormText;
