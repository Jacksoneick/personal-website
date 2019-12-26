import React from 'react';
import Grid from '@material-ui/core/Grid'
import CarouselComponent from './carousel.js';
import gitHubLogo from '../images/gitHubLogo.png'
import transitSimulator from '../images/transitSimulator.png'
import transitSimulator1 from '../images/transitSimulator1.png'
import transitSimulator2 from '../images/transitSimulator2.png'
import './bloodBank.css'



function TransitSimulator() {
    return (
        <Grid container spacing={1}>
            <Grid xs={12}>
            <h1 className='title'>Transit Simulator</h1>
            </Grid>
            <Grid xs={12}>
            <CarouselComponent props={
                {pictureOne: transitSimulator,
                pictureTwo: transitSimulator1,
                pictureThree: transitSimulator2,
                pictureOneDescription:'The main menu of the app',
                pictureTwoDescription: 'Registering a donor in the app',
                pictureThreeDescription: null
                }} />
            </Grid>
            <Grid xs ={6}>
                <h1>About the project</h1>
                <h5>This is sample text.<br/><br />
                    Technologies Used:
                    <ul>
                        <li>JQuery</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Dafny</li>
                        
                    </ul>
                </h5>
            </Grid>
            <Grid xs ={6}>
                <h1><a className="link">Check it out on GitHub!</a></h1>
                <h6>*Source code can be supplied on request</h6>
                <img alt="GitHub logo" src={gitHubLogo} style={{width: '25%', height:'55%', maxHeight: '200px'}}></img>
            </Grid>
        </Grid>
    )
}

export default TransitSimulator;