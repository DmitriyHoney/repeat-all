import React from 'react';
import s from './MyMessages.module.css';

const MyMessage = props => {
    return(
        <div className={s.wrapMessage}>
            Hello Jenny!
        </div>
    )
}

export default MyMessage;