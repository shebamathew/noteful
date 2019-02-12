import React from 'react'
import './Sidebar.css'; 
import Folder from '../Folder/Folder'; 

function Sidebar (props) {
        return (
            <div className="sidebar">
                {props.children}
                {props.folders.map((folder) =>
                   <Folder 
                        key={folder.id}
                        title={folder.name} 
                    />
                )}   
            </div>
        )
}


export default Sidebar 