import React from 'react';
import s from './UserName.module.css';

const UserName = props => {
    return(
        <div>
            <h3>
                {props.name} {props.surname}
            </h3>
        </div>
    )
}

export default UserName;