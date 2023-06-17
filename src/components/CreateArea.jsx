import React, {useState} from "react";

function CreateArea(props) {
  const [newTitle, setNewTitle] = useState(""); 
  const [newContent, setNewContent] = useState("");

  function handleTitleInput(event){
    setNewTitle(event.target.value);
  }

  function handleContentInput(event){
    setNewContent(event.target.value);
  }

  function buildNoteObj(titleText, contentText){
    return {
      key: props.arr.length + 1,
      title: titleText,
      content: contentText
    }
  }

  function addNote(event){
    event.preventDefault();
    let newEntry = buildNoteObj(newTitle, newContent);
    props.updArr(prevNotesArr=>[...prevNotesArr, newEntry]);
    setNewTitle("");
    setNewContent("");
  }

  return (
    <div>
      <form onSubmit={addNote}>
      
        <input 
          name="title" 
          placeholder="Title"
          onChange={handleTitleInput}
          value={newTitle}
        />

        <textarea 
          name="content" 
          placeholder="Take a note..." 
          rows="3"
          onChange={handleContentInput}
          value={newContent}
        />

        <button type="submit">Add</button>

      </form>
    </div>
  );
}

export default CreateArea;