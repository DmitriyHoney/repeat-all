import React from 'react';
import s from './UserPosts.module.css';
import OnePost from "../OnePost/OnePost";

const UserPosts = props => {
    let postsList = props.posts.map(post => {
        return <OnePost {...post} key={post.postId}/>
    });
    return(
        <div>
            {postsList}
        </div>
    )
}

export default UserPosts;