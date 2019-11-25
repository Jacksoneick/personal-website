import React from 'react';
import Grid from '@material-ui/core/Grid'
import CarouselComponent from './carousel.js';
import gitHubLogo from '../images/gitHubLogo.png'
import weather from '../images/weather_app.jpg'
import weather1 from '../images/weather_app1.jpg'
import weather2 from '../images/weather_app2.jpg'



function WeatherApp() {
    return (
        <Grid container spacing={1}>
            <Grid xs={12}>
            <h1 className='title'>Weather App</h1>
            </Grid>
            <Grid xs={12}>
            <CarouselComponent props={
                {pictureOne: weather,
                pictureTwo: weather1,
                pictureThree: weather2,
                pictureOneDescription:'The display on a rainy day.',
                pictureTwoDescription: 'The display on a sunny day',
                pictureThreeDescription: 'The display on a cloudy day.'
                }} />
            </Grid>
            <Grid xs ={6}>
                <h1>About the project</h1>
                <h5>The inspiration for this app was the need for a weather app that allowed me to get all of the information that I needed
                    at a very quick glance. As a college student, my mornings are often rushed and I don't have time to open up a weather app and naviage 
                    through all of the different numbers and data that are irrelivant for what I need, so I decided to make this app that would give me 
                    the current weather and weather outlook for the next week at a quick glance.<br/><br />
                    Technologies Used:
                    <ul>
                        <li>DarkSky API</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        
                    </ul>
                </h5>
            </Grid>
            <Grid xs ={6}>
                <h1><a className="link" href='https://github.com/Jacksoneick/Weather-App'>Check it out on GitHub!</a></h1>
                <a href='https://github.com/Jacksoneick/Weather-App'><img src={gitHubLogo} style={{width: '25%', height:'55%', maxHeight: '200px'}}></img></a>
            </Grid>
        </Grid>
    )
}

export default WeatherApp;