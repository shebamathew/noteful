import React from 'react'; 

class Folder extends React.Component {
    render() {
        // const folderName = this.props.title
        // const buttons = this.props.map((folderName, index) => (
        //     <button key={index}>
        //       {folderName}
        //     </button>
        // ))

        return (
            <div className="folder">
                <button>
                    {this.props.title}
                </button>
            </div>
        )
    }
}

export default Folder; 