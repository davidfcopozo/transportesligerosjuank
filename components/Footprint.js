import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import footprintStyles from "../styles/components/Footprint.module.scss";

const Footprint = () => {
  return (
    <div className={footprintStyles.footprint} data-testid="footprint">
      <p>
        Diseñado y construido por <br />
        <a
          href="https://davidfrancisco.netlify.com/"
          target="_blank"
          rel="noreferrer"
        >
          David Francisco
        </a>{" "}
        con <FontAwesomeIcon icon={faMugHot} />
      </p>
    </div>
  );
};

export default Footprint;
