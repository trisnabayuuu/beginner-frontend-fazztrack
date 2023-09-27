import React from 'react'

const ForgetPassword = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>New password</Form.Label>
                <Form.Control type="text" placeholder="newpassword" id='newpassword' required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Confirm New password</Form.Label>
                <Form.Control type="text" placeholder="confirmnewpassword" id='confirmnewpassword' required />
            </Form.Group>
        </Form>
    );
}

export default ForgetPassword