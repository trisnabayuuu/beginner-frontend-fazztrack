import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import gambarcarousel from "../assets/img/dilan top bg.png";
import './Carousel.css'

const Carrouselview = () => {
    const [book, setBooks] = useState([]); // State untuk menyimpan data buku

    
    const fetchBooks = () => {
        fetch('http://127.0.0.1:9010/book?deleted=false')
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {

                    setBooks(data.data); 
                } else {
                    console.error('Error:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        fetchBooks();
    }, []);
    
    return (
        <Carousel>
            {book.map((book) => (
            <Carousel.Item interval={2000}>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <img src={gambarcarousel} alt="asd"/>
                {/* <img src={book.imageUrl} alt="asd"/> */}
                <Carousel.Caption>
                    <h1>{book.title}</h1>
                </Carousel.Caption>
            </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Carrouselview


