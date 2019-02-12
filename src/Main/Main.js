import React from 'react'
import Note from '../Note/Note'
import './Main.css'; 

function Main (props) {
        // const noteList = props.notes.map((note) =>
        //     <li key={note.id}>
        //         {note.name}
        //     </li>
        // )
        return (
            <div className="main">
                {/* <ul>
                    {noteList}
                </ul> */}
                {props.notes.map((note) =>
                    <Note 
                        key={note.id}
                        title={note.name}
                        date={note.modified}
                        content={note.content}
                    />
                )}
            </div>
        )
}

export default Main