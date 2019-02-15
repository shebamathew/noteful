import React from 'react'


function Note (props) {
        return (
            <div className="note">
                <h3>{props.title}</h3>
                <p>Date Modified on {props.date}</p>
                <button type="button">Delete Note</button>
            </div>
        )
    }


export default Note; 