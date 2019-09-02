import React from 'react';
import styles from '../Buttons.css'

const two = (props) => {
    return (
        <div className={styles.button} onClick={() => { props.click( "2" ) }}>
            <h3>2</h3>
        </div>
    );
};

export default two;