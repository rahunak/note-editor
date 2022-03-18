import React from "react";
import style from "./tags.module.css";

function Tag(props) {

    return (
        <li className={style.tag} >
            <p> {props.text} </p>
            <button onClick={() => props.deleteTag(props.tagId)}> X </button>
        </li>
    );
}

export default Tag;