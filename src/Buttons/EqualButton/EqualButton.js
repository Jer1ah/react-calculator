import React from 'react';
import styles from '../Buttons.css';

const equalButton = (props) => {
    return (
        <div className={`${styles.button} ${styles.orange}`} onClick={props.equals}>
            <h3>=</h3>
        </div>
    );
};

export default equalButton;