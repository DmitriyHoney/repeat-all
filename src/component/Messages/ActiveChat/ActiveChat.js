import React from 'react';
import s from './ActiveChat.module.css';
import SmallAvatar from "../../Сommon/SmallAvatar/SmallAvatar'";

const ActiveChat = props => {
    return(
        <div className={s.section}>
            <div className={`${s.friendChatWrap}`}>
                <SmallAvatar active={true}/>
            </div>
            <div className={s.friendChatWrap}>
                <SmallAvatar/>
            </div>
            <div className={s.friendChatWrap}>
                <SmallAvatar/>
            </div>
        </div>
    )
}

export default ActiveChat;