import React from 'react';
import styles from '../Buttons.css'

const seven = (props) => {
    return (
        <div className={styles.button} onClick={() => { props.click( "7" ) }}>
            <h3>7</h3>
        </div>
    );
};

export default seven;