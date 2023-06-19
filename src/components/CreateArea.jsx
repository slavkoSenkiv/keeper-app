import React, {useState} from "react";
import SaveIcon from '@mui/icons-material/Save';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [zoomed, setZoomed] = useState(true);

  function handleTitleChange(event){
    let titleInput = event.target.value;
    setNewTitle(titleInput);
  }

  function handleContentChange(event){
    let contentInput = event.target.value;
    setNewContent(contentInput);
  }

  function createNoteObj(){
    return {
      key: props.notesArr.length + 1,
      title: newTitle,
      content: newContent
    }
  }

  function addNote(event){
    event.preventDefault();
    let newNoteEntry = createNoteObj()
    props.updArr([newNoteEntry, ...props.notesArr]);
    setNewTitle("");
    setNewContent("");
  }

  function handleAppearence(){
    zoomed ? setZoomed(false) : setZoomed(true);
  }

  return (
    <div>
      <form 
        onSubmit={addNote} 
        className="create-note"
        onClick={handleAppearence}>

        <Zoom in={zoomed}>
          <h1>
            <input 
              placeholder="enter title" 
              onChange={handleTitleChange} 
              value={newTitle}
            />
          </h1>
        </Zoom>

        <textarea 
          placeholder="enter content" 
          onChange={handleContentChange} 
          value={newContent}
        />

        <Zoom in={true}>
          <Fab type="submit">
            <SaveIcon/>
          </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;