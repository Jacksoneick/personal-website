import React from 'react';
import Summary from './summary.js';
import Proficiency from './proficiency.js';
import Signature from './signature.js';
import resume from '../images/resume.pdf'
import './mainPage.css'


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
      <h1 className="header">Resume</h1>
      <h6><a class="download link" href={resume} download>Download</a></h6>
      <iframe title="Resume" src={resume} height="1150" width="1000"></iframe>
    </div>
    )
}
export default MainPage;