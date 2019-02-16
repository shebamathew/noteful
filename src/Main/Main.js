import React from 'react'
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext'
import './Main.css'; 

class Main extends React.Component {
    // TODO: refactor to make use of context instead of props.
    // static contextType = NotefulContext
    static defaultProps = {notes: []}

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
        const notes = this.props.notes; 
        console.log(notes)
        return (
            <div className="main">
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