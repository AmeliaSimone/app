import React from 'react'

import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" style={{ "width": "220px;" }} alt="" />
      </div>
      <div className={styles.title}>Caso N°7310 - Datos del servicio</div>
    </div>
  );
};

export default Header;