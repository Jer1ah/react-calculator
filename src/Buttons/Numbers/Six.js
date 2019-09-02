import React from 'react';
import styles from '../Buttons.css';

const six = (props) => {
    return (
        <div className={styles.button} onClick={() => { props.click( "6" ) }}>
            <h3>6</h3>
        </div>
    );
};

export default six;