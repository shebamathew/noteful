import React from 'react'; 
import Header from '../Header/Header'; 
import Sidebar from '../Sidebar/Sidebar'; 
import Main from '../Main/Main'; 

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="folderPage">
                <Header/>
                <Sidebar/>
                <Main/>
            </div>
        )
    }
}