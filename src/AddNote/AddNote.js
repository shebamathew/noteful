import React from 'react'; 

export default class AddNote extends React.Component {
    render() {
        return (
            <form>
                <h2>Create a Note</h2>
                <div>* required field</div>  
                <div className="form-group">
                    <label htmlFor="title">Title *</label>
                    <input type="text" id="Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Content">Content *</label>
                    <textarea id="content"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="Folder">Folder</label>
                    <select id="folderSelect"/>
                </div>

                <div>
                    <button type="submit" className="form_button">
                        Add Note 
                    </button>
                </div>
            </form>
        )
    }
}