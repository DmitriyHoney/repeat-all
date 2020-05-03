import React from 'react';
import s from './OnePost.module.css';
import SmallAvatar from "../SmallAvatar/SmallAvatar'";
import LikesCount from "../LikesCount/LikesCount";

const OnePost = props => {
    return(
        <div className={`${s.wrap} default-card`}>
            <SmallAvatar
                avatar={props.avatar}
                name={props.name}
                surname={props.surname}
                timePost={props.timePost}
                userId={props.userId}
            />
            <p className={s.postText}>
                {props.postText}
            </p>
            <div className={s.like}>
                <LikesCount likesCount={props.likesCount} />
            </div>

        </div>
    )
}

export default OnePost;