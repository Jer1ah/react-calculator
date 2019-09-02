import React from 'react';

const flexRow = (props) => {
    return (
        <div className={props.styling}>{props.children}</div>
    );
};

export default flexRow;