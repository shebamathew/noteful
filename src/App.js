import React, { Component } from 'react';
import './App.css'; 
import dummyStore from './dummy-store'; 
import { Route, Switch } from 'react-router-dom'; 
import HomePage from './HomePage/HomePage'; 
import FolderPage from './FolderPage/FolderPage';
import NotePage from './NotePage/NotePage'; 
import NotefulContext from './NotefulContext';


class App extends Component {
  state = {
      notes: [], 
      folders: [],
  }; 
  
  componentDidMount() {
    this.setState(dummyStore); 
  }

  // handleFolderButtonClick(index) {
  //   console.log('button clicked!', { index })
  // }

  // renderFolderPage() {
  //   const folders  = this.state.folders; 
  //   return folders.map( (folder, index) => (
  //     <button key={index} onClick={() => this.handleFolderButtonClick(index)}>
  //       {folder.name}
  //     </button>
  //   ))
  // }

  // renderNotePage() {
  //   return this.state.notes.map( (note, index) => (
  //     <button key={index}>
  //       {note.name}
  //     </button>
  //   ))
  // }

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
