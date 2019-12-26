import React from 'react';
import Grid from '@material-ui/core/Grid'
import CarouselComponent from './carousel.js';
import gitHubLogo from '../images/gitHubLogo.png'
import bloodBank from '../images/blood_bank.png'
import bloodBank1 from '../images//blood_bank1.png'
import bloodBank2 from '../images//blood_bank2.png'
import './bloodBank.css'



function BloodBank() {
    return (
        <Grid container spacing={1}>
            <Grid xs={12}>
            <h1 className='title'>Blood Bank App</h1>
            </Grid>
            <Grid xs={12}>
            <CarouselComponent props={
                {pictureOne: bloodBank,
                pictureTwo: bloodBank1,
                pictureThree: bloodBank2,
                pictureOneDescription:'The main menu of the app',
                pictureTwoDescription: 'Registering a donor in the app',
                pictureThreeDescription: 'An error message when the donor is not found'
                }} />
            </Grid>
            <Grid xs ={6}>
                <h1>About the project</h1>
                <h5>This mobile application was made for a project that was assigned to me for my second semester capstone project.
                    The app includes the functionality to register as a blood donor, register a donation, as well as find all 
                    compatible donors in the system. The app leveraged the OpenMRS API as the medical record database system.
                    Along with this app, I created a desktop app with a team that imports the data from the MySQL database that was
                    created for local storage of donors and posted that data to the OpenMRS database.<br/><br />
                    Technologies Used:
                    <ul>
                        <li>OpenMRS API</li>
                        <li>Python</li>
                        <li>MySQL</li>
                        <li>Kivy</li>
                        <li>SQL Alchemy</li>
                        
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

export default BloodBank;