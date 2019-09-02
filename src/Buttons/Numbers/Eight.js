import React from 'react';
import styles from '../Buttons.css'

const eight = (props) => {
    return (
        <div className={styles.button} onClick={() => { props.click( "8" ) }}>
            <h3>8</h3>
        </div>
    );
};

export default eight;