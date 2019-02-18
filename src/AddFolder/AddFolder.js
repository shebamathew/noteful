import React from 'react'; 

export default class AddFolder extends React.Component {
    render() {
        return (
            <form>
                <h2>Create a Folder</h2>
                <div className="form-group">
                    <label htmlFor="Name">Name</label>
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