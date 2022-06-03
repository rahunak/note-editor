import React, {useEffect, useState} from "react";
import NoteForm from "../../components/noteForm/Form/noteForm";
import {v4 as uuidv4} from "uuid";
import Notes from "../../components/note/notes";
import SearchPanel from "../../components/noteForm/searchPanel/searchPanel";
import s from "./noteFormContainer.module.css"
import { saveAs } from 'file-saver';
const NoteFormContainer = () => {
    let [notes, setNotes] = useState([]);
    let [currText, setCurrText] = useState("");
    let [filter, setFilter] = useState("");
    let [havingTag, setHavingTag] = useState(false);
    useEffect(() => {
        },
        [notes, notes.tags]);
    let notesList;
    function setFilterParams(params) {
        setFilter(params);
    }
    function searchTags(str) {
        return str.match(/#\w*/g);
    }
    function setTags(str) {
        let tags = searchTags(str);
        if (tags) {
            tags = tags.map(tag => {
                return {
                    tag: tag,
                    id: uuidv4(),

                }
            })
        }
        return tags;
    }
    function setTextNote(e) {
        let text = e.target.value;
        setCurrText(text);
    }
    function addNote(e) {
        e.preventDefault();
        let tags = setTags(currText);
        if (tags) setHavingTag(true);
        setNotes(prev => {
            if (currText.trim() === "") {
                return prev;
            }
            return [...notes,
                {
                    tags: tags,
                    textNote: currText,
                    id: uuidv4(),
                },
            ];
        });
        setCurrText("");

    }
    function deleteNote(deleteId) {
        setNotes(prev => notes.filter(el => el.id !== deleteId));
    }
    function changeNote(noteId, newTextNote) {
        let newNotes = notes.map(note => {
            if (note.id === noteId) {
                note.textNote = newTextNote;
                note.tags = setTags(newTextNote);
                return note;
            }
            return note;
        })
        setNotes(newNotes);
    }
    function deleteTag(tagId) {
        let newNotes = notes.map(note => {
            if (!note.tags) return note;
            for (let i = 0; i < note.tags.length; i++) {
                if (note.tags[i].id === tagId) note.tags.splice(i, 1);
            }
            return note;
        });

        setNotes(newNotes);
    };
    function compareTags(a) {
        if (!a.tags) return 1;
        for (let i = 0; i < a.tags.length; i++) {
            if (a.tags[i].tag === filter) {
                return -1;
            }
        }
    }

    function saveNotes(){
        var FileSaver = require('file-saver');
        var file = new File([JSON.stringify(notes, null, 2)], "notes.txt", {type: "application/json;charset=" + document.characterSet});
        FileSaver.saveAs(file);
        console.log("notes ",notes);
    }
    notesList = notes.sort(compareTags).map(note =>
        <Notes
            key={note.id}
            deleteTag={deleteTag}
            changeNote={changeNote}
            deleteNote={deleteNote}
            text={note.textNote}
            noteId={note.id}
            tags={note.tags || []}
        />);
    return (<div className={s.wrapper}>
        <NoteForm
            text={currText}
            setTextNote={setTextNote}
            addNote={addNote}
        />
        {
            havingTag &&
            <SearchPanel setFilterParams={setFilterParams}/>
        }
        <div className={s.notesList}>
            {notesList}
        </div>

        <div className={s.actionJSON}>
            <label htmlFor="btn">Press button for download JSON file with your notes</label>
            <button onClick={()=>saveNotes()}>Download</button>
        </div>

    </div>);
}
export default NoteFormContainer;