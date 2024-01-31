import React from 'react'

import styles from "./Section.module.scss"

const Section = ({children, width, aling}:any) => {
  return (
    <div className={styles.section} style={{"width": width, justifyContent:aling}}>{children}</div>
  );
};

export default Section;