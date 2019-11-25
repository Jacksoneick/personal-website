import React from 'react';
import headshot from '../images/headshot.png'
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