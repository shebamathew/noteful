import React from 'react'
import './Sidebar.css'; 
import Folder from '../Folder/Folder'; 

function Sidebar (props) {
        return (
            <div className="sidebar">
                {props.children}
                <Folder /> 
                <Folder /> 
            </div>
        )
}


export default Sidebar 