import React from 'react'; 
import Header from '../Header/Header'; 
import Sidebar from '../Sidebar/Sidebar'; 
import Main from '../Main/Main'; 
import NotefulContext from '../NotefulContext'; 

export default class HomePage extends React.Component {
    static contextType = NotefulContext; 

    render() {
        return (
            <div className="folderPage">
                <Header/>
                <Sidebar/>
                <Main /> 
            </div>
        )
    }
}