//dependences
import React, {Component} from 'react';


//local imports
import styles from '../styles/MainComponent.module.css';


export class MainComponent extends Component
{
    render (){
        return (
            <div className={styles.main}>
            This is Main Component
            </div>
        )
    }
}

export default MainComponent;