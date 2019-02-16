import React from 'react'; 
import Header from '../Header/Header'; 
import Sidebar from '../Sidebar/Sidebar'; 
import Main from '../Main/Main'; 
import NotefulContext from '../NotefulContext'; 

export default class FolderPage extends React.Component {
    static contextType = NotefulContext; 

    render() {  
        const notes = this.context.notes.filter(note => 
            note.folderId === this.props.match.params.folderId
        ) 
        console.log(notes); 

        return (
            <div className="folderPage">
                <Header/>
                <p>This is the Folder Page!</p>
                <Sidebar/>
                <Main notes={notes}/>
            </div>
        )
    }
}
