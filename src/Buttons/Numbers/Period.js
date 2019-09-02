import React from 'react';
import styles from '../Buttons.css'

const period = (props) => {
    return (
        <div className={styles.button} onClick={() => { props.click( "." ) }}>
            <h3>.</h3>
        </div>
    );
};

export default period;