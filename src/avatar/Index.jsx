import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import avatarimg from '../assets/img/niki.png'
import './Avatar.css'

const Avatar = () => {
    return (
        <Container >
            <Row className='avatar-view'>
                <Col xs={6} md={6}>
                    <Image src={avatarimg} roundedCircle />
                </Col>
            </Row>
        </Container>
    );
}

export default Avatar