import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './proficiency.css'
const style = {
    margin: '20px',
    marginLeft: '150px',
    marginRight: '150px',
}

function proficiency(props) {
    return (
        <div>
            <h2 className="languageTitle">{props.props.name}:</h2>
            <h4 className="languageTitle">{props.props.value}%</h4>
            <ProgressBar className="progressBar" now={props.props.value} label={props.props.label} />
        </div>
    )
}

export default proficiency;