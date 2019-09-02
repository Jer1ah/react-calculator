import React from 'react';
import styles from '../Buttons.css';

const plusButton = (props) => {
    return (
        <div className={`${styles.button} ${styles.orange}`} onClick={props.add}>
            <h3>+</h3>
        </div>
    );
};

export default plusButton;