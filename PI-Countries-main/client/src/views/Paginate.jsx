import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../styles/Paginate.module.css"
import { nextPage, prevPage } from "../redux/actions";

const Paginate = () => {
    const { numPage } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    function next() {
        dispatch(nextPage())
    }

    function prev() {
        dispatch(prevPage())
    }


    return (
        <div classname={style.page}>
            <button onClick={prev}>PREV</button>
            <p>{numPage-1}</p>
            <h3>{numPage}</h3>
            <p>{numPage+1}</p>
            <button onClick={next}>NEXT</button>
        </div>
    )
}




export default Paginate;