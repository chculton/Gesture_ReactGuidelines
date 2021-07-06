import React from "react";
import PropTypes from 'prop-types';

// locel imports
import styles from "../styles/Card.module.css"
import AboutMe from "../components/AboutMe";
import QuoteBox from "../components/QuoteBox";

function Card ( {ronism, getQuote} )
{
    return  (
        <div className={styles.card}>
            <AboutMe name='C. Hans Culton' food='pizza' number={7} />
            <QuoteBox ronism={ronism} getQuote={getQuote}/>
        </div>
    )
}

Card.propTypes={
    ronism: PropTypes.string,
    getQuote: PropTypes.func.isRequired,
}

export default Card;