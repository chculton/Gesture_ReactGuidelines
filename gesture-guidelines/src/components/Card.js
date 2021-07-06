import React from "react";

// locel imports
import styles from "../styles/Card.module.css"
import AboutMe from "../components/AboutMe";
import QuoteBox from "../components/QuoteBox";

function Card ( )
{
    return  (
        <div className={styles.card}>
            <AboutMe name='C. Hans Culton' food='pizza' number={7} />
            <QuoteBox/>
        </div>
    )
}

export default Card;