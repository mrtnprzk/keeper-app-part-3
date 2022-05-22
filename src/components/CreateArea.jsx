import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  //magic thing!!! MUST KNOW!!!
  function handleChange(e){

    const {name, value} = e.target

    setNote(prevNotes => {
      return {
        ...prevNotes,
        [name]: value
      }
    })

  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>

        <input name="title" value={note.title} placeholder="Title" onChange={handleChange}/>
        <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" onChange={handleChange}/>
        <button onClick={()=> {props.functionAdd(note); setNote({title: "", content: ""})}}>Add</button>

      </form>
    </div>
  );
}

export default CreateArea;
