import React from "react";
import style from './Pagination.module.css';

const Pagination = props => {
    function getArray(quantityBtns) {
        let buttonArray = [];
        for(let i = 1; i <= quantityBtns; i++) {
            buttonArray.push(i);
        };
        return buttonArray;
    }

    let quantityPage = Math.ceil(props.totalCount / props.pageSize);

    let btnList = getArray(quantityPage).map(btn => {
        return(
            <span
                key={btn}
                className={props.currentPage === btn ? style.current : ''}
                onClick={() => props.changePage(btn)}
            >{btn}
            </span>
        )
    })

    return <div>{btnList}</div>
};

export default Pagination;