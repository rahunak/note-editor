import React, {useState} from "react";
import TagList from "../tags/TagList";
import style from "./note.module.css";

function Notes(props) {
    let [mode, setMode] = useState(false);

    function onBlurNoteHandler(noteId, newText) {
        setMode(false);
        props.changeNote(noteId, newText);
    }

    return (
        <div className={style.wrapper}>
            {!mode
                && <>
                    <div className={style.note}>
                        <p onClick={() => setMode(true)}> {props.text} </p>
                        <button onClick={() => props.deleteNote(props.noteId)}> X </button>
                    </div>
                    <TagList
                        tags={props.tags}
                        deleteTag={props.deleteTag}
                    />
                </>}

            {mode
                && <div className={style.note}>
                     <textarea
                         onBlur={(e) => onBlurNoteHandler(props.noteId, e.target.value)}
                         name="note"
                         defaultValue={props.text}
                     />
                    <TagList
                        tags={props.tags}
                        deleteTag={props.deleteTag}
                    />
                </div>}
        </div>
    );
}

export default Notes;
