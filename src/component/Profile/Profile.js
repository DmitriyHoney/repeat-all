import React from 'react';
import s from './Profile.module.css';
import ProfileCard from "./ProfileCard/ProfileCard";
import AddPost from "./AddPost/AddPost";
import UserPosts from "../Сommon/UserPosts/UserPosts";
import Preloader from "../Сommon/Preloader/Preloader";

const Profile = props => {
    let profileCard = props.profilePage.profileCard;
    return(
        <div>
            {profileCard && props.profilePage.isDownload
             ? <ProfileCard profileCard={profileCard} updateStatus={props.updateStatus} status={props.profilePage.status}/>
             : <Preloader/>
            }
            <AddPost addPostValue={props.profilePage.addPostValue} addPost={props.addPost} updateTextPost={props.updateTextPost}/>
            <UserPosts posts={props.profilePage.posts}/>
        </div>
    )
}

export default Profile;