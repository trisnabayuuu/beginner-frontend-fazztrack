import React from 'react'
import Form from 'react-bootstrap/Form';

const FromLogin = () => {
    return(
        
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" id='email' required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' id='password' required></Form.Control>
            {/* <Form.Control as="textarea" rows={3} /> */}
        </Form.Group>
    </Form>
    );
}

export default FromLogin