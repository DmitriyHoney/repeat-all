import React from 'react';
import s from './ProfileCard.module.css';
import LargeAvatar from "../../Сommon/LargeAvatar/LargeAvatar";
import UserName from "../../Сommon/UserName/UserName";
import Social from "../../Сommon/Social/Social";
import UserStatus from "../../Сommon/UserStatus/UserStatus";

const ProfileCard = props => {
    let {aboutMe, contacts, lookingForAJob, lookingForAJobDescription, fullName, userId, photos} = props.profileCard;

    return(
        <div className={`${s.cardWrap} default-card`}>
            <div className={s.info}>
                <LargeAvatar avatar={photos.small}/>
                <UserName name={fullName}/>
            </div>
            <UserStatus updateStatus={props.updateStatus} status={props.status}/>
            <div>
                <p>{aboutMe}</p>
            </div>
            <div>
                В поисках работы: {lookingForAJob ? 'Yes' : 'No'}
            </div>
            <Social social={contacts}/>
        </div>
    )
}

export default ProfileCard;