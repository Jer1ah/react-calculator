import React from 'react';
import styles from '../Buttons.css';

const minusButton = (props) => {
    return (
        <div className={`${styles.button} ${styles.orange}`} onClick={props.minus}>
            <h3>-</h3>
        </div>
    );
};

export default minusButton;