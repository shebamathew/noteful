import React from 'react'; 
import NotefulContext from '../NotefulContext'; 
import { Link } from 'react-router-dom'; 


class Note extends React.Component {
    static defaultProps = {
		note: {}
	};
	static contextType = NotefulContext;

	handleClickDelete(noteId) {
		fetch(`http://localhost:9090/notes/${noteId}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(() => {
				this.context.deleteNote(noteId);
				this.props.handleDeleteNote();
				this.context.fetchNotes();
			});
    }

    render() {
        return (
            <div className="note">
                <h3>{this.props.title}</h3>
                <p>Date Modified on: {this.props.date}</p>
                <button type="button" onClick={() => this.handleClickDelete(this.props.noteId)}>Delete Note</button>
            </div>
        )
    }
}

export default Note; 