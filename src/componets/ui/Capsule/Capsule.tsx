import React from 'react'

import styles from "./Capsule.module.scss"

const Capsule = ({height, width, color, backgroundColor, text}:any) => {
  return (
    <div className={styles["capsule"]} style={{height:height, width: width, color: color, backgroundColor: backgroundColor}}>{text}</div>
  );
};

export default Capsule;