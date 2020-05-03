import React from "react";
import Header from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAutorizedStateThunkCallback} from "../../Redux/auth-reducer";

let mapStateToProps = state => ({
    authPage: state.authPage
});

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAutorizedStateThunkCallback()
    }

    render() {
        return<Header {...this.props.authPage}/>
    }
}

export default compose(
    connect(mapStateToProps, {getAutorizedStateThunkCallback})
)(HeaderContainer)