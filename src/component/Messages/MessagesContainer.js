import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";
import {updateTextMessageAC} from "../../Redux/messages-reducer";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let mapStateToProps = state => ({
    messagesPage: state.messagesPage
});
let mapDispatchToProps = dispatch => ({
    updateTextMessage(newText) {
        dispatch(updateTextMessageAC(newText))
    }
});

const MessagesContainer = props => <Messages messagesPage={props.messagesPage} updateTextMessage={props.updateTextMessage}/>;

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(MessagesContainer)