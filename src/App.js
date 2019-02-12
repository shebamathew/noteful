import React, { Component } from 'react';
import './App.css'; 
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main'; 
import Header from './Header/Header';
import dummyStore from './dummy-store'; 

class App extends Component {
  state = {
    notes: [], 
    folders: [],
  }; 

  componentDidMount() {
    this.setState(dummyStore); 
  }

  render() {
    return ( 
      <>
      <Header />
      <Sidebar className="sidebar"
        folders={this.state.folders}
      >
        {/* <Route path='/' component={MainSidebar} />
        <Route path='/foo' component={FooSidebar} /> */}
      </Sidebar>
      <Main className="main" flexBasis={2}
        notes={this.state.notes}
      >
        {/* <Route path='/' component={MainMain} />
        <Route path='/foo' component={FooMain} /> */}
      </Main>
      </>
    )
  }
}

export default App;
