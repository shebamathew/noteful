import React from 'react'; 
import {Link} from 'react-router-dom'; 

class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <Link to='/'>
                Noteful
                </Link>
            </div>
        )
    }
}

export default Header