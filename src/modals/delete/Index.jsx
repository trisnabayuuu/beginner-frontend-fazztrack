import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import deletebutton from "../../assets/img/checked.png"

function DeleteModal() {
    const [show, setShow] = useState(false);
    const { id } = useParams();

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const deleteBook = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:9010/book/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData.message);
                alert(responseData.message); 
                handleClose();
            } else {
                console.error(`Error deleting book with id ${id}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <a type="button" style={{ margin: "10px" }} id="" onClick={handleShow}>
                Delete
            </a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body> 
                    {/* icon delete */}
                    <img style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "25%" }} src={deletebutton} alt="" />
                    <h2 style={{ textAlign: "center", marginTop: "10px" }}>Data telah dihapus</h2>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-warning" onClick={deleteBook}>
                        Confirm Delete
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;
