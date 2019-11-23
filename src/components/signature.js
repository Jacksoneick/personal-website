import React from 'react';
import signature from '../images/signature.png'
import headshot from '../images/headshot.jpg'
import { blockStatement } from '@babel/types';
import './signature.css'


function Signature() {
    return (
        <div>
            <h1 className='name'>Jackson Eickhoff</h1>
            <img src={headshot}></img>
        </div>
    )
}

export default Signature;