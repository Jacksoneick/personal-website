import React from 'react';
import headshot from '../images/headshot.png'
import './signature.css'


function Signature() {
    return (
        <div>
            <h1 className='name'>Jackson Eickhoff</h1>
            <img src={headshot} alt="Headshot"></img>
        </div>
    )
}

export default Signature;