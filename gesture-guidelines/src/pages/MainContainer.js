//dependences
import React, {Component} from 'react';
import axios from 'axios';

//local imports
import styles from '../styles/MainContainer.module.css';
import Card from '../components/Card';

// https://ron-swanson-quotes.herokuapp.com/v2/quotes

export class MainComponent extends Component
{
    // DATA: WILL STORE STRING FROM API CALL
    state={data: ""}

    // CALLS API FOR A QUOTE AND CALL updateState()
    getSwansonQuote = async() => {
        await axios ('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then((res => {
            const quote = res.data[0];
            this.updateState(quote);
        }))
        .catch((error) => {
            console.error("Error fetching data: ", error)
        })
        .finally(()=>console.log('getData function ran'))
    }

    // FUNCTION UPDATES STATE OF DATA
    updateState=(quote) =>
    {
        this.setState({data: quote}, () => {
            console.log(this.state.data)
        })
    }

    componentDidMount()
    {
        this.getSwansonQuote();
    }

    render (){
        return (
            <div className={styles.main}>
            <Card ronism={this.state.data} getQuote={this.getSwansonQuote}/>
            </div>
        )
    }
}

export default MainComponent;