import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import MainPage from './mainPage';
import Projects from './projects';
import WeatherApp from './weatherApp.js';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path="/home" component={MainPage} />
            <Route path="/projects" component={Projects} />
            <Route path='/weatherApp' component={WeatherApp} />
        </Switch>
    </main>
)

export default Main;