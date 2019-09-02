import React from 'react';
import styles from '../Buttons.css'

const one = (props) => {
    return (
        <div className={styles.button} onClick={() => { props.click( "1" ) }}>
            <h3>1</h3>
        </div>
    );
};

export default one;