import React from 'react';
import styles from '../Buttons.css';

const divideButton = (props) => {
    return (
        <div className={`${styles.button} ${styles.orange}`} onClick={props.divide}>
            <h3>/</h3>
        </div>
    );
};

export default divideButton;