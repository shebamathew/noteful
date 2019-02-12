import React from 'react'
import Folder from '../Folder/Folder'; 

class Sidebar extends React.Component {
    render () {
        return (
            <div className="sidebar">
                <Folder /> 
            </div>
        )
    }
}

export default Sidebar 