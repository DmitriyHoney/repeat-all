import React from 'react';
import s from './CurrentDialogs.module.css';
import MyMessage from "../../Сommon/MyMessage/MyMessage";
import FriendMessage from "../../Сommon/FriendMessage/FriendMessage";

const CurrentDialogs = props => {
    return(
        <div className={`${s.section} default-card`}>
            <MyMessage />
            <FriendMessage />
            <MyMessage />
            <FriendMessage />
            <MyMessage />
            <FriendMessage />
        </div>
    )
}

export default CurrentDialogs;