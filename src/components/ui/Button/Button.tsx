import React from 'react'

import styles from "./Button.module.scss"

const Button = ({height, width, color, backgroundColor, text, iconName}:any) => {
  return (
    <div className={styles["button"]} style={{height:height, width: width, color: color, backgroundColor: backgroundColor}}><span className="material-icons" style={{ fontSize:"17px", color: color }}>
    {iconName}
  </span>{text}</div>
  );
};

export default Button;