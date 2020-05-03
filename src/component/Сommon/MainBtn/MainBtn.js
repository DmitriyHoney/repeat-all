import React from 'react';

const MainBtn = props => {
    return(
        <div>
            <button className={`main-btn`} {...props}>{props.text}</button>
        </div>
    )
}

export default MainBtn;