import React from 'react';
import styles from '../Buttons.css'

const three = (props) => {
    return (
        <div className={styles.button} onClick={() => { props.click( "3" ) }}>
            <h3>3</h3>
        </div>
    );
};

export default three;