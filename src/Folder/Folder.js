import React from 'react'; 
import {Link, NavLink} from 'react-router-dom'; 
import NotefulContext from '../NotefulContext'; 
import Note from '../Note/Note';

class Folder extends React.Component {
    static contextType = NotefulContext; 
    
    render() {
        const notes = this.context.notes.filter(note => 
            note.folderId === this.props.folderId
        ) 
        console.log(notes); 
        
        return (
            <div className="folder">
                <Link to={`/folder/${this.props.folderId}`}>
                    {this.props.folderName}
                </Link>
            </div>
        )
    }
}

export default Folder; 


  
