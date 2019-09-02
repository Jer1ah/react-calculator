import React from 'react';
import styles from '../Buttons.css'

const nine = (props) => {
    return (
        <div className={styles.button} onClick={() => { props.click( "9" ) }}>
            <h3>9</h3>
        </div>
    );
};

export default nine;