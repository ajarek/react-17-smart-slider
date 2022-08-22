import React from "react";
import "./dot.css";
const Dots = (props) => {
  let dots = ["Dot=1", "Dot=2", "Dot=3"];
  return (
    <div className="dots">
      {dots.map((dot, index) => {
        return (
          <span
            key={index}
            className={props.active === index ? "dot active" : "dot"}
          ></span>
        );
      })}
    </div>
  );
};
export default Dots;
