import React from 'react';
import s from './Messages.module.css';
import ActiveChat from "./ActiveChat/ActiveChat";
import CurrentDialogs from "./CurrentDialogs/CurrentDialogs";
import AddMessage from "../Сommon/AddMessage/AddMessage";

const Messages = props => {
    return(
        <div className={s.wrapMessage}>
            <ActiveChat />
            <CurrentDialogs />
            <AddMessage value={props.messagesPage.messageValue} updateTextMessage={props.updateTextMessage}/>
        </div>
    )
}

export default Messages;