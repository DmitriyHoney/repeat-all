import React from 'react';
import s from './AddPost.module.css';
import MainBtn from "../../Сommon/MainBtn/MainBtn";


const AddPost = props => {
    let textarea = React.createRef();

    let handleBtn = () => {
        props.addPost();
    }
    let handleTextarea = (e) => {
        props.updateTextPost(e.target.value);
    }

    return(
        <div className={s.addPostWrap}>
            <textarea className={s.textarea} placeholder="Add new post" ref={textarea} value={props.addPostValue} onChange={handleTextarea}/>
            <MainBtn text="Add post" onClick={handleBtn}/>
        </div>
    )
}

export default AddPost;