import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gambar from "../assets/img/dilan.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cardview = () => {
    const cardStyle = {
        width: '18rem',
        // height: '20rem'
    };

    return (
        <Row>
            <Col xs={12} sm={6} md={4}>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={gambar} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
                <Card style={cardStyle}>
                <Card.Img variant="top" src={gambar} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={gambar} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Cardview