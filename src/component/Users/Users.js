import React from 'react';
import OneUser from "../Сommon/OneUser/OneUser";
import Pagination from "../Сommon/Pagination/Pagination";

const Users = props => {
    let userList = props.usersPage.items.map(user => {
       return(
           <OneUser
                avatar={user.photos.small}
                userId={user.id}
                name={user.name}
                status={user.status}
                followed={user.followed}
                key={user.id}
                follow={props.follow}
                unFollow={props.unFollow}
                usersProcessSubscribe={props.usersPage.usersProcessSubscribe}
           />
       )
    });

    return(
        <div>
            <Pagination
                totalCount={props.usersPage.totalCount}
                pageSize={props.usersPage.pageSize}
                currentPage={props.usersPage.currentPage}
                changePage={props.changePage}
            />
            {userList}
        </div>
    )
};


export default Users;