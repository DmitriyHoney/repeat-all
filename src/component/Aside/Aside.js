import React from 'react';
import s from './Aside.module.css';
import {NavLink} from 'react-router-dom';

const Aside = props => {
    return (
        <aside className={s.section}>
            <ul>
                <li className={s.item}>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/messages">Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users">Users</NavLink>
                </li>
            </ul>
        </aside>
    );
}




export default Aside;
