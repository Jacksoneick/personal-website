import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import MainPage from './mainPage';
import Projects from './projects';
import WeatherApp from './weatherApp.js';
import PageNotFound from './pageNotFound.js'
import ContaceMe from './contactMe.js'
import BloodBank from './bloodBank.js'
import TransitSimulator from './transitSimulator.js'
import './main.css'

const Main = () => (
    <main className='main'>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path="/home" component={MainPage} />
            <Route path="/projects" component={Projects} />
            <Route path='/weatherApp' component={WeatherApp} />
            <Route path='/contactMe' component={ContaceMe} />
            <Route path='/BloodBank' component={BloodBank} />
            <Route path='/transitSimulator' component={TransitSimulator} />
            <Route component={PageNotFound}/>
        </Switch>
    </main>
)

export default Main;