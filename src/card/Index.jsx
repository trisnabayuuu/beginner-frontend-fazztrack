import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import gambar from "../assets/img/dilan.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cardview = () => {
    const [book, setBooks] = useState([]); // State untuk menyimpan data buku

    
    const fetchBooks = () => {
        fetch('http://127.0.0.1:9010/book?deleted=false')
        // fetch('http://127.0.0.1:9010/book')
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    //simpan buku di state
                    setBooks(data.data); 
                } else {
                    console.error('Error:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    // Panggil metode fetchBooks() saat komponen pertama kali dimuat 
    useEffect(() => {
        fetchBooks();
    }, []);

    const navigateTo = useNavigate();
    const routeDetail = (id) => {
        navigateTo(`/detail/${id}`); // Navigasi ke detail
    };

    const cardStyle = {
        width: '18rem',
        // height: '20rem'
    };
    // style untuk desc card
    const descriptionStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    };
    return (
        <Row >
            {book.map((book) => (
            <Col key={book.id} xs={12} sm={6} md={4}>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={book.imageUrl} />
                    <Card.Body>
                        <Card.Title>
                            {book.title}
                        </Card.Title>

                        <Card.Text style={descriptionStyle}>
                            {book.description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => routeDetail(book.id)}>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    );
}

export default Cardview