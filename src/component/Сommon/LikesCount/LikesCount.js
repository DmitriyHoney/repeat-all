import React from 'react';
import s from './LikesCount.module.css';

const LikesCount = props => {

    return(
        <div>
            <span className={s.likeBtn}>
                likes: {props.likesCount}
            </span>
        </div>
    )
}

export default LikesCount;