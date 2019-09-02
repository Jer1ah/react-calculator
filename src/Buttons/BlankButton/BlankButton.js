import React from 'react';
import styles from '../Buttons.css'

const blankButton = (props) => {
    return (
        <div className={styles.button}><h3>{props.content}</h3></div>
    );
};

export default blankButton;