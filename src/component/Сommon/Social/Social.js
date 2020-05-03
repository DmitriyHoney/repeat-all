import React from 'react';
import s from './Social.module.css';

const Social = props => {
    function contactsFromObjToHtml(obj) {
        let result = [];
        let i = 1;
        for(let key in obj) {
            if(obj[key]) result.push(<a href={`https://${obj[key]}`} target="_blank" key={i++} className={s.social}>{key}</a>)
        }
        return result;
    }
    return(
        <div>
            <h4>Мои контакты:</h4>
            {contactsFromObjToHtml(props.social)}
        </div>
    )
}

export default Social;