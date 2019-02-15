mport React from 'react'; 
import Header from '../Header/Header'; 
import Main from '../Main/Main'; 

export default class FolderPage extends React.Component {
    render() {
        return (
            <div className="folderPage">
                <Header/>
                <Main/>
            </div>
        )
    }
}