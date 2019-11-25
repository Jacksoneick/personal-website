import React from 'react';
import Summary from './summary.js';
import Proficiency from './proficiency.js';
import Signature from './signature.js';
import Link from 'react-router-dom/Link';

function MainPage() {
    return (
    <div className ="backgroundImage">
      <Signature />
      <Summary />
      <h1 className='languageHeader'>Language Proficiencies</h1>
      <Proficiency props={{value:60, label: '60%', name:'Java'}} />
      <Proficiency props={{value:60, label: '60%', name:'Python'}} />
      <Proficiency props={{value:70, label: '70%', name:'Javascript'}} />
      <Proficiency props={{value:50, label: '50%', name:'MySQL'}} />
      <Proficiency props={{value:60, label: '60%', name:'React.js'}} />
    </div>
    )
}

export default MainPage;