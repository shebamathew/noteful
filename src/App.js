import React, { Component } from 'react';
import './App.css'; 
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main'; 
import Header from './Header/Header';
import dummyStore from './dummy-store'; 
import { Route } from 'react-router-dom'; 
import NotefulContext from './NotefulContext';

class App extends Component {
  state = {
      notes: [], 
      folders: [],
  }; 
  
  componentDidMount() {
    this.setState(dummyStore); 
  }

  handleFolderButtonClick(index) {
    console.log('button clicked!', { index })
  }

  renderFolderPage() {
    const { notes, folders } = this.state
    return this.state.folders.map( (folder, index) => (
      <button key={index} onClick={() => this.handleFolderButtonClick(index)}>
        {folder.name}
      </button>
    ))
  }

  renderNotePage() {
    return this.state.notes.map( (note, index) => (
      <button key={index}>
        {note.name}
      </button>
    ))
  }

  render() {
    const contextValue = {
      notes: this.state.notes, 
      folders: this.state.folders, 
    }
    
    return ( 
      <>
      <NotefulContext.Provider value={contextValue}>
          <Header />
          <Sidebar/>
          <Main />
      </NotefulContext.Provider>
      </>
    )
  }
}

export default App;
