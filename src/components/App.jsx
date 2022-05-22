import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  //function to add object into array
  function addThat(note){
    setNotes(prevNotes => [
      ...prevNotes, note
    ])
  }

  //filter to delete object
  function deleteThat(id){
    setNotes(prevNotes => {
      return prevNotes.filter((e, i ) => {
        return (i !== id)
      })
    })
  }

  return (
    <div>
      <Header />
      
      <CreateArea functionAdd={addThat}/>

      {notes.map((noteItem, key) => (
        <Note key={key} id={key} title={noteItem.title} content={noteItem.content} functionDelete={deleteThat}/>
      ))}

      
      <Footer />
    </div>
  );
}

export default App;
