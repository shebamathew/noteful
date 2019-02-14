import React from 'react'
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext'
import './Main.css'; 

class Main extends React.Component {
    static contextType = NotefulContext

    render() {
        // const noteButtons = this.props.notes.map((note,index) => (
        //     <button key={index}>
        //         {note.name}
        //     </button>
        // ))
        // const noteList = props.notes.map((note) =>
        //     <li key={note.id}>
        //         {note.name}
        //     </li>
        // )
        const notes = this.context.notes; 
        return (
            <div className="main">
                {/* <ul>
                    {noteList}
                </ul> */}
                {/* {noteButtons} */}
                {notes.map((note) =>
                    <Note 
                        key={note.id}
                        title={note.name}
                        date={note.modified}
                        content={note.content}
                    />
                )}
                <button type="button">Add Note</button>
            </div>
        )

    }
} 
    

export default Main