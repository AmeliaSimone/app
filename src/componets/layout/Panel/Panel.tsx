import React from 'react'

import styles from "./Panel.module.scss"

const Panel = ({children, width} :any) => {
  return (
    <div className={styles.panel} style={{width: width}}>{children}</div>
  );
};

export default Panel;