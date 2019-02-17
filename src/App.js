import React, { Component } from 'react';
import './App.css'; 
import dummyStore from './dummy-store'; 
import { Route, Switch } from 'react-router-dom'; 
import HomePage from './HomePage/HomePage'; 
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage'; 
import NotefulContext from './NotefulContext';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [], 
      folders: [],
    }; 
  }
  
  componentDidMount() {
    this.setState(dummyStore); 
    const getFolders = fetch('http://localhost:9090/folders'); 
    const getNotes = fetch('http://localhost:9090/notes'); 
    Promise.all([getFolders, getNotes])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(([folders, notes]) =>
				this.setState({
					folders,
					notes
				})
			);
  }

  handleDeleteNoteClick = (noteID) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteID)
    }); 
	}

  render() {
    const {notes, folders} = this.state; 
    const contextValue = {
      notes, 
      folders
    }

   if (folders.length !== 0) {
    console.log(folders[0].id); 
   } 

    return ( 
      <div className="App">
        <NotefulContext.Provider value={contextValue}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route 
              path='/folder/:folderId' component={FolderPage} 
              // render={(props) => <FolderPage {...props} folderId={folders.id} />}
            />
            <Route path='/note' component={NotePage} />
          </Switch>
        </NotefulContext.Provider>
      </div>
    )
  }
}

export default App;
