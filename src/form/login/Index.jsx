import React from 'react'
import Form from 'react-bootstrap/Form';

const FromLogin = ({ username, password}) => {
    return (

        <Form>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} //update email state
                    required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' 
                value={password}      
                onChange={(e) => setPassword(e.target.value)}
                required
                ></Form.Control>
                {/* <Form.Control as="textarea" rows={3} /> */}
            </Form.Group>
        </Form>
    );
}

export default FromLogin