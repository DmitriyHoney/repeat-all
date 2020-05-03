import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPostAC, getStatusThunkCallback,
    getUserProfileThunkCallback,
    updateStatusThunkCallback,
    updateTextPostAC
} from "../../Redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Preloader from "../Сommon/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let mapStateToProps = state => ({
    profilePage: state.profilePage,
    authPage: state.authPage,
});

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authPage.data.id;
        }
        this.props.getUserProfileThunkCallback(userId);
        this.props.getStatusThunkCallback(userId);
    }
    addPost = () => {
        this.props.addPostAC();
    }
    updateTextPost = (newText) => {
        this.props.updateTextPostAC(newText);
    }

    updateStatus = (textStatus) => {
        this.props.updateStatusThunkCallback(textStatus);
    }

    render() {
        if(this.props.authPage.isDownload) {
            return (
                <Profile
                    profilePage={this.props.profilePage}
                    addPost={this.addPost}
                    updateTextPost={this.updateTextPost}
                    updateStatus={this.updateStatus}
                />
            )
        } else {
            return <Preloader/>
        }

    }
}

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {addPostAC, updateTextPostAC, getUserProfileThunkCallback, updateStatusThunkCallback, getStatusThunkCallback})
)(ProfileContainer)

