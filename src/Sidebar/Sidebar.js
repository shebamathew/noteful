import React from 'react'
import './Sidebar.css'; 
import {NavLink} from 'react-router-dom'; 
import NotefulContext from '../NotefulContext'; 

class Sidebar extends React.Component {

    static contextType = NotefulContext; 

    render() {
        const folders = this.context.folders; 
    
        return (
            <div className="sidebar">
                <ul>
                    {folders.map(folder =>
                        <li key={folder.id}>
                            <NavLink to={`/folder/${folder.id}`}>
                                {folder.name}
                            </NavLink>
                        </li>
                    )}
                </ul>
                <button type="button">Add Folder</button>
            </div>
        )
    }
}


export default Sidebar 
