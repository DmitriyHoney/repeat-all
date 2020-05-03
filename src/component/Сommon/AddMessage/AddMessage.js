import React from 'react';
import s from './AddMessage.module.css';
import MainBtn from "../MainBtn/MainBtn";
import {updateTextMessageAC} from '../../../Redux/messages-reducer';

const AddMessage = props => {
    let anyRef = React.createRef();
    let handleBtn = () => {
        alert(anyRef.current.value)
    }

    let onUpdateMessage = e => {
        props.updateTextMessage(e.target.value);
    }

    return(
        <div className={s.section}>
            <textarea className={s.textarea} placeholder='Add message' ref={anyRef} value={props.value} onChange={onUpdateMessage}/>
            <MainBtn text={'AddMessage'} onClick={handleBtn}/>
        </div>
)
}

export default AddMessage;