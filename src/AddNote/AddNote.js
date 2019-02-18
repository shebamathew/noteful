import React from 'react'; 
import ValidationError from '../ValidationError'; 

export default class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '', 
            content: '',  
            folder: '',
            titleValid: false, 
            formValid: false, 
            validationMessages: {
                title: '', 
            }
        }
    }
    
    handleSubmit(event) {
        event.preventDefault(); 
        const { title, content, folder } = this.state; 
        console.log('Title: ', title); 
        console.log('Content: ', content); 
        console.log('Folder: ', folder); 
    } 

    updateTitle(title) {
        this.setState({title}, () => {this.validateTitle(title)});
    }
      
    updateContent(content) {
        this.setState({content});
    }
      
    updateFolder(folder) {
        this.setState({folder});
    }

    validateTitle(fieldValue) {
        const fieldErrors = {...this.state.validationMessages};
        let hasError = false;
    
        fieldValue = fieldValue.trim();
        if(fieldValue.length === 0) {
          fieldErrors.title = 'Title is required';
          hasError = true;
        } else {
            fieldErrors.title = '';
            hasError = false;
        }
    
        this.setState({
          validationMessages: fieldErrors,
            titleValid: !hasError
        }, this.formValid );
    
    }

    formValid() {
        this.setState({
          formValid: this.state.titleValid 
        });
    }

    folderOptions(folders) {
		let options;
		if (folders.length === 0) {
			options = <option value="">Loading...</option>;
		} else {
			options = folders.map(folder => (
				<option key={folder.id} value={folder.id}>
					{folder.name}
				</option>
			));
			options.unshift(
				<option key="select" value="">
					Select a folder...
				</option>
			);
		}
		return options;
	}

    render() {
        return (
            <form className="addNoteForm" onSubmit={e => this.handleSubmit(e)}>
                <h2>Create a Note</h2>
                <div>* required field</div>  
                <div className="form-group">
                    <label htmlFor="title">Title *</label>
                    <input type="text" id="Title" onChange={e => this.updateTitle(e.target.value)}/>
                    <ValidationError hasError={!this.state.titleValid} message={this.state.validationMessages.title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Content">Content *</label>
                    <textarea id="content" onChange={e => this.updateContent(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="Folder">Folder</label>
                    <select id="folderSelect" onChange={e => this.updateFolder(e.target.value)}>
                        {this.folderOptions}
                    </select>
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