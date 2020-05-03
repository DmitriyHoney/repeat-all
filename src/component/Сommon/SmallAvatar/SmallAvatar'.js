import React from 'react';
import defaultUser from '../../../assets/image/default-user.jpg';
import s from './SmallAvatar.module.css';
import {NavLink} from 'react-router-dom';

const SmallAvatar = props => {
    let active = props.active ? s.active : '';
    return(
        <NavLink to={`profile/${props.userId}`} className={`${s.wrap} ${active}`}>
            <div>
                <img src={props.avatar || defaultUser} className={s.avatar} alt="avatar-sm"/>
            </div>
            <div>
                <h4>
                    {props.name} {props.surname}
                </h4>
                <div className={s.postTime}>
                    {props.timePost}
                </div>
            </div>
        </NavLink>
    )
}

export default SmallAvatar;