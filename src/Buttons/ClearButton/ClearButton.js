import React from 'react';
import styles from '../Buttons.css';

const clearButton = (props) => {
    return (
        <div className={styles.button} onClick={props.clearTotal}>
            <h3>AC</h3>
        </div>
    );
};

export default clearButton;