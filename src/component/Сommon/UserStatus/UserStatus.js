import React from "react";
import s from './UserStatus.module.css';

class UserStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status,
            editMode: false
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status != this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    onEditMode = () => {
        this.setState({editMode: true});
    }
    offEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }
    handleInput = (e) => {
        this.setState({status: e.target.value});
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <span className={s.statusText} onDoubleClick={this.onEditMode}>{this.props.status}</span>
                    : <input type="text" onBlur={this.offEditMode} autoFocus onChange={this.handleInput} value={this.state.status}/>
                }
            </div>
        )
    }
}

export default UserStatus;