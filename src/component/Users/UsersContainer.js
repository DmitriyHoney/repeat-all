import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Сommon/Preloader/Preloader";
import {
    followOnUserThunkCallback,
    requestUsersThunkCallback,
    unFollowOnUserThunkCallback
} from "../../Redux/users-reducer";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let mapStateToProps = state => ({
    usersPage: state.usersPage
});

class UsersContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.requestUsersThunkCallback();
    }

    unFollow = (id) => {
        this.props.unFollowOnUserThunkCallback(id)
    }
    follow = (id) => {
        this.props.followOnUserThunkCallback(id)
    }
    changePage = (newPage) => {
        this.props.requestUsersThunkCallback(newPage);
    }

    render() {
        if (this.props.usersPage.isDownload ) {
            return <Users usersPage={this.props.usersPage} changePage={this.changePage} follow={this.follow} unFollow={this.unFollow}/>
        } else {
            return <Preloader />
        }
    }
}



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {requestUsersThunkCallback, followOnUserThunkCallback, unFollowOnUserThunkCallback})
)(UsersContainer);