import React from "react";

const TextError = (props) => {
  const style = {
    color: "red",
  };
  return (
    <div style={style} className="error">
      {props.children}
    </div>
  );
};

export default TextError;
