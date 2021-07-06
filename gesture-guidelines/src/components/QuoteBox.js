import React from "react";

// local imports
import styles from "../styles/QuoteBox.module.css";

function QuoteBox()
{
    return (
        <div className={styles.box}>
            <h4 className={styles.box__title}>Great Ronism:</h4>
            <p className={styles.box__quote}>This is where the quote will go.</p>
            <button className={styles.box__btn}>Get Quote</button>
        </div>
    )
}

export default QuoteBox;