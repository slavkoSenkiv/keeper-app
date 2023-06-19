import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){

    function deleteNote(){
        props.updArr(prevArr => prevArr.filter(note => note.key !== props.noteKey));
    }

    return (
        <div className='note'>
            <h1>{props.noteTitle}</h1>
            <p>{props.noteContent}</p>
            <button onClick={deleteNote}><DeleteIcon/></button>
        </div>
    );
}

export default Note;