import React, {useState} from "react";

function CreateArea(props){

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

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

  return (
    <div>
      <form onSubmit={addNote}>
      
        <h1><input placeholder="enter title" onChange={handleTitleChange} value={newTitle}/></h1>

        <textarea placeholder="enter content" onChange={handleContentChange} value={newContent}/>

        <button type="submit">Add</button>

      </form>
    </div>
  );
}

export default CreateArea;