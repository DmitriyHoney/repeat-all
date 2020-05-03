import React from 'react';
import SmallAvatar from "../SmallAvatar/SmallAvatar'";
import styles from './OneUser.module.css';
import MainBtn from "../MainBtn/MainBtn";

const OneUser = props => {
    let btn;

    if(props.followed) {
        btn = <MainBtn text="Unfollowed" onClick={() => props.unFollow(props.userId)} disabled={props.usersProcessSubscribe.some(elem => elem == props.userId)}/>
    } else {
        btn = <MainBtn text="Follow" onClick={() => props.follow(props.userId)} disabled={props.usersProcessSubscribe.some(elem => elem === props.userId)}/>;
    }
    return(
        <div className={styles.section}>
            <SmallAvatar
                avatar={props.avatar}
                userId={props.userId}
                name={props.name}
            />
            <p className={styles.info}>
                {props.status}
            </p>
            <div className={styles.info}>
                {btn}
            </div>
        </div>
    )
};


export default OneUser;