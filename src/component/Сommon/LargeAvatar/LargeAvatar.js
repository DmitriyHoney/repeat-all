import React from 'react';
import defaultUser from '../../../assets/image/default-user.jpg';
import s from './LargeAvatar.module.css';

const LargeAvatar = props => {
    return(
        <div >
            <img src={props.avatar || defaultUser} className={s.avatar} alt="avatar"/>
        </div>
    )
}

export default LargeAvatar;