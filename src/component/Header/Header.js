import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = props => {
    return(
        <header className={s.section}>
            <a href="#" className={s.logo}>Logotype</a>
            {props.isAuth ? <p>{props.data.login}</p> : <NavLink to={'/login'}>Login</NavLink>}
        </header>
    )
}

export default Header;