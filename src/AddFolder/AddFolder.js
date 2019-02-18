import React from 'react'; 

export default class AddNote extends React.Component {
    render() {
        return (
            <form>
                <h2>Create a Folder</h2>
                <div>* required field</div>  
                <div className="form-group">
                    <label htmlFor="Name">Name *</label>
                    <input type="text" id="folderName"/>
                </div>
                <div>
                    <button type="submit" className="form_button">
                        Add Folder
                    </button>
                </div>
            </form>
        )
    }
}