import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import gambarcarousel from "../assets/img/dilan top bg.png";

const Carrouselview = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <img src={gambarcarousel} alt="asd" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                {/* <ExampleCarouselImage text="Second slide" /> */}
                <img src={gambarcarousel} alt="asd" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <img src={gambarcarousel} alt="asd" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrouselview

