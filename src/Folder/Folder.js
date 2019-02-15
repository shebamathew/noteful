import React from 'react'; 
import {Link, NavLink} from 'react-router-dom'; 
class Folder extends React.Component {
    render() {
        const folderId = this.props.key; 
        return (
            <div className="folder">
                <a to {...`folders/${folderId}`}>
                    {this.props.title}
                </a>
            </div>
        )
    }
}

export default Folder; 