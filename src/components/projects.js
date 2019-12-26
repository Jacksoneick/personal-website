import React from 'react';
import Grid from '@material-ui/core/Grid'
import './projects.css'
import weatherApp from '../images/weather_app.jpg';
import bloodBank from '../images/blood_bank_resized.png'
import transitSimulator from '../images/transitSimulator.png'
import CardComponent from './projectCard.js';

function Projects() {
    return (
        <div>
        <Grid className="grid" container spacing={0} >
           <Grid item xs={4} >
            <CardComponent props={
                {title: 'Weather App',
                description: 'A simple weather app that I made to give myself a natural language summary of the weather in my area.', 
                picture: weatherApp,
                link: '/weatherApp'}
                }/>
            </Grid>
            <Grid item xs={4} >
            <CardComponent props={
                {title: 'Blood Bank App',
                description: 'A blood bank application that was made as a capstone project during my second semester of college.', 
                picture: bloodBank,
                link: '/bloodBank'}
                }/>
            </Grid>
            <Grid item xs={4} >
            <CardComponent props={
                {title: 'Transit Simulator',
                description: 'A transit simulator that was developed by our professors, and we were tasked to implement different features, such as a heat map.', 
                picture: transitSimulator,
                link: '/transitSimulator'}
                }/>
            </Grid>
        </Grid>
        </div>
    )
}

export default Projects;