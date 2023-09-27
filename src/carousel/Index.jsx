import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import gambarcarousel from "../assets/img/dilan top bg.png";
import './Carousel.css'

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



// const Flickity = require('react-flickity-component');
// Or for ES2015 module
// import Flickity from 'react-flickity-component'
// import gambarcarousel from "../assets/img/dilan top bg.png";

// const flickityOptions = {
//     initialIndex: 2
// }

// const Carrouselview = () => {
//     return (
//         <Flickity
//             className={'carousel'} // default ''
//             elementType={'div'} // default 'div'
//             options={flickityOptions} // takes flickity options {}
//             disableImagesLoaded={false} // default false
//             reloadOnUpdate // default false
//             static // default false
//         >
//             <img src={gambarcarousel} />
//             <img src={gambarcarousel} />
//             <img src={gambarcarousel} />
//         </Flickity>
//     )
// }

// export default Carrouselview