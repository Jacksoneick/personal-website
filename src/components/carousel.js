import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';


const style = {
    marginRight: '125px',
    marginLeft: '125px',
    marginBottom: '125px',
    size: '50%'
}

function CarouselComponent(props) {
    return(
        <Carousel className='carousel'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={props.props.pictureOne}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>{props.props.pictureOneDescription}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={props.props.pictureTwo}
                alt="Third slide"
                />

                <Carousel.Caption>
            <h3>{props.props.pictureTwoDescription}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={props.props.pictureThree}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>{props.props.pictureThreeDescription}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;