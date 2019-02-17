import React from 'react'; 
import Header from '../Header/Header'; 
import Main from '../Main/Main'; 
import Note from '../Note/Note'; 

export default class NotePage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Note
                    id={this.props.note.id}
                    name={this.props.note.name}
                    modified={this.props.note.modified}
                />
            </div>
        )
    }
}