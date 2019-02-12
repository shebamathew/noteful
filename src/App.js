import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main'; 
import Header from './Header/Header';
import dummyStore from './dummy-store'; 

class App extends Component {
  render() {
    return ( 
      <>
      <Header />
      <Sidebar>
        {/* <Route path='/' component={MainSidebar} />
        <Route path='/foo' component={FooSidebar} /> */}
      </Sidebar>
      <Main>
        {/* <Route path='/' component={MainMain} />
        <Route path='/foo' component={FooMain} /> */}
      </Main>
      </>
    )
  }
}

export default App;
