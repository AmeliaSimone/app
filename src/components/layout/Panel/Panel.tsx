import React from 'react'

import styles from "./Panel.module.scss"

const Panel = ({children, width, className} :any) => {
  return (
    <div className={`${styles.panel} ${className}`} style={{width: width}}>{children}</div>
  );
};

export default Panel;