import React from "react";
import styles from"./TextBox.module.scss";
const TextBox = ({label, text, width, md}:any) =>{
    return(
        <div className={`${styles.textBox} ${styles[md]}`} style={{width: width}}>
                    <label>{label}</label>
                    <input type="text" value={text}/>
                </div>
    );
};
export default TextBox;