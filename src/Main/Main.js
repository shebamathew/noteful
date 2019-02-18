import React from 'react'
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext'
import './Main.css'; 
import {Link} from 'react-router-dom'; 

class Main extends React.Component {
    // TODO: refactor to make use of context instead of props.
    static contextType = NotefulContext
    // static defaultProps = {notes: []};

    render() {
        const notes = this.context.notes.filter(note => 
            note.folderId === this.props.folderId
        )
        console.log(notes)
        return (
            <div className="main">
                {notes.map((note) =>
                    <Note 
                        key={note.id}
                        noteId={note.id}
                        title={note.name}
                        date={note.modified}
                        content={note.content}
                    />
                )}
                <Link to="/add-note">Add Note</Link>
            </div>
        )

    }
} 
    

export default Main