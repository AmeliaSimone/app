import React from 'react'

import styles from "./Section.module.scss"

const Section = ({children, width, aling, wrap}:any) => {
  return (
    <div className={`${styles.section} ${styles.query}`} style={{"width": width, justifyContent:aling, flexWrap: wrap}}>{children}</div>
  );
};

export default Section;