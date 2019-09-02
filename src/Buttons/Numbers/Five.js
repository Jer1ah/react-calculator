import React from 'react';
import styles from '../Buttons.css';

const five = (props) => {
    return (
        <div className={styles.button} onClick={() => { props.click( "5" ) }}>
            <h3>5</h3>
        </div>
    );
};

export default five;