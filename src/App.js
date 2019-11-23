import React from 'react';
import './App.css';
import NavbarComponent from './components/navBar.js'
import CarouselComponent from './components/carousel.js'
import Summary from './components/summary.js'
import Proficiency from './components/proficiency.js'
import Signature from './components/signature.js'
import proficiency from './components/proficiency'

function App() {
  return (
    <div>
      <NavbarComponent />
      <Signature />
      <Summary />
      <h1 className='languageHeader'>Language Proficiencies</h1>
      <Proficiency props={{value:60, label: '60%', name:'Java'}} />
      <Proficiency props={{value:60, label: '60%', name:'Python'}} />
      <Proficiency props={{value:70, label: '70%', name:'Javascript'}} />
      <Proficiency props={{value:50, label: '50%', name:'MySQL'}} />
      <Proficiency props={{value:60, label: '60%', name:'React.js'}} />
    </div>
    );
  }


export default App;
