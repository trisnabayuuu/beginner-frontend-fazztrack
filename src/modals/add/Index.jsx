import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddModal() {
    const [show, setShow] = useState(false);
    const [book, setBook] = useState({
        judul: '',
        description: '',
        imageUrl: '',
    });

    const handleClose = () => {
        setShow(false);
        // reset modal saat ditutup
        setBook({
            judul: '',
            description: '',
            imageUrl: '',
        });
    };
    const handleShow = () => setShow(true);

    const inputChange = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value,
        });
    };

    const addBook = () => {
        
        fetch('http://127.0.0.1:9010/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        })
            .then((response) => response.json())
            .then((data) => {
                
                console.log(data);
                
                handleClose();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <h4 onClick={handleShow} >Add Book</h4>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="Image Url.."
                        name='imageUrl' 
                        value={book.imageUrl}
                        onChange={inputChange} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Book Title"
                        name='judul'
                        value={book.judul}   
                        onChange={inputChange} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTextArea">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Description"
                            name='description'
                            value={book.description}
                            onChange={inputChange} 
                            style={{ height: '100px' }}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={addBook}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddModal;