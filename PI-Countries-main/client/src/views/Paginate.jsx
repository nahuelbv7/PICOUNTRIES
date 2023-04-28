import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../styles/Paginate.module.css"
import { nextPage, prevPage } from "../redux/actions";

const Paginate = ({cantPage}) => {
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
           { numPage > 1 ? <div>  
            <button onClick={prev}>PREV</button>
            <p>{numPage-1}</p></div>:null}
          
            <h3>{numPage}</h3>
            {
                numPage < cantPage ?
                <div><p>{numPage+1}</p>
                <button onClick={next}>NEXT</button> </div>:null
            }
            
        </div>
    )
}




export default Paginate;