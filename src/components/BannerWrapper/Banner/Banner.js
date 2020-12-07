import React from "react";
import "./Banner.css";

function Banner(props) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: "url(" + props.img + ")",
        justifyContent: props.align
      }}
    >
      <div className="banner--text">
        <span style={{ color: props.titleColor }}>{props.title}</span>
        <p style={{ color: props.descColor }}>{props.desc}</p>
      </div>
    </div>
  );
}

export default Banner;
