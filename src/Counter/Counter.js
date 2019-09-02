import React from 'react';
import styles from './Counter.css'

const counter = (props) => {
    return (
        <div className={styles.counter}>
            <h3>{props.total}</h3>
        </div>
    );
};

export default counter;