import React from 'react';
import styles from '../Buttons.css'

const four = (props) => {
    return (
        <div className={styles.button} onClick={() => { props.click( "4" ) }}>
            <h3>4</h3>
        </div>
    );
};

export default four;