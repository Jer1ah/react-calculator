import React from 'react';
import styles from '../Buttons.css';

const multiplyButton = (props) => {
    return (
        <div className={`${styles.button} ${styles.orange}`} onClick={props.multiply}>
            <h3>X</h3>
        </div>
    );
};

export default multiplyButton;