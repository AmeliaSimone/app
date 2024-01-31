import React from 'react'

import styles from "./Table.module.scss"

const Table = ({ children, height, width }: any) => {
  return (
    <div className={styles.table} style={{height:height, width: width}}>{children}</div>
  );
};

const TableHeader = ({ children }: any) => {
  return (
    <div className={styles['table-header']}>{children}</div>
  );
};

const TableDetail = ({ children }: any) => {
  return (
    <div className={styles["table-detail"]}>{children}</div>
  );
};

const TableRow = ({ children }: any) => {
  return (
    <div className={styles["table-row"]}>{children}</div>
  );
};

const TableCell = ({ children, width, aling }: any) => {
  return (
    <div className={styles["table-cell"]} style={{width: width, justifyContent: aling}}>{children}</div>
  );
};

const TableCellEnd = () => {
  return (
    <div className={styles["table-cell-end"]}></div>
  );
};


export {Table, TableHeader, TableDetail, TableRow, TableCell, TableCellEnd};