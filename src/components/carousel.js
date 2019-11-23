import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mountains from '../images/mountains.jpg'
import vacation from '../images/colorado_vacation.jpg'
import minnesotaVacation from '../images/minnesota_vacation.JPG'
import odeszaVacation from '../images/odesza_concert.JPG'

const style = {
    marginRight: '125px',
    marginLeft: '125px',
    marginBottom: '125px'
}

function CarouselComponent() {
    return(
        <Carousel style={style}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={odeszaVacation}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>My First Odesza Concert with Friends</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={vacation}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Vacation to Colorado with friends</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={minnesotaVacation}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Vacation to Colorado with friends</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;