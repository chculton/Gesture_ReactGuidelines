import React from "react";

// locel imports
import styles from "../styles/Card.module.css"
import AboutMe from "../components/AboutMe";

function Card ( )
{
    return  (
        <div className={styles.card}>
            <AboutMe name='C. Hans Culton' food='pizza' number={7} />
        </div>
    )
}

export default Card;