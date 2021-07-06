//dependences
import React, {Component} from 'react';


//local imports
import styles from '../styles/MainContainer.module.css';
import Card from '../components/Card';


export class MainComponent extends Component
{
    render (){
        return (
            <div className={styles.main}>
            <Card />
            </div>
        )
    }
}

export default MainComponent;