import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = state => ({
    isAuth: state.authPage.isAuth
});

const withAuthRedirect = Component => {
    let ComponentWithAuth = props => {
        if(props.isAuth) return <Component {...props} />
        else return <Redirect to={'/login'}/>
    }
    return connect(mapStateToProps, null)(ComponentWithAuth)
}

export default withAuthRedirect;