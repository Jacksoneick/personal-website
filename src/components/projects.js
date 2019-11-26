import React from 'react';
import Grid from '@material-ui/core/Grid'
import './projects.css'
import weatherApp from '../images/weather_app.jpg';
import CardComponent from './projectCard.js';

function Projects() {
    return (
        <div>
        <Grid className="grid" container spacing={0} >
           <Grid item xs={4} >
            <CardComponent props={
                {title: 'Weather App',
                description: 'A simple weather app that I made to give me a natural language summary of the weather in my area.', 
                picture: weatherApp,
                link: '/weatherApp'}
                }/>
            </Grid>
        </Grid>
        </div>
    )
}

export default Projects;