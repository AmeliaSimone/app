import React from 'react'

import styles from "./Body.module.scss"

const Body = ({children, className}: any) => {
  return (
    <div className={`${styles.body} ${className}`}>{children}</div>
  );
};

export default Body;