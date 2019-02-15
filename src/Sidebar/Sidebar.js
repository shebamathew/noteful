import React from 'react'
import './Sidebar.css'; 
import Folder from '../Folder/Folder'; 
import {Link, NavLink} from 'react-router-dom'; 
import NotefulContext from '../NotefulContext'

class Sidebar extends React.Component {

    static contextType = NotefulContext; 

    render() {
        const folders = this.context.folders; 
        // const folderButtons = this.props.folders.map((folder,index) => (
        //     <button key={index}>
        //         {folder.name}
        //     </button>
        // )); 
        return (
            <div className="sidebar">
                {folders.map((folder) =>
                    <Folder 
                        key={folder.id}
                        title={folder.name}
                    />
                )}
                <button type="button">Add Folder</button>
            </div>
        )
    }
}


export default Sidebar 