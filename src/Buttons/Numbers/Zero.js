import React from 'react';
import styles from '../Buttons.css'

const zero = (props) => {
    return (
        <div className={`${styles.button} ${styles.zero}`} onClick={() => { props.click( "0" ) }}>
            <h3>0</h3>
        </div>
    );
};

export default zero;