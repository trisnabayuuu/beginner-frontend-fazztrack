import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import imgbutton from '../assets/img/sidebar.png';
import './Sidebar.css'
import Avatar from '../avatar/Index';
import AddModal from '../modals/add/Index';

function SideBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const username = localStorage.getItem("username");
    // const logout = localStorage.clear();

    return (
        <>
            <Button className='sidebar-button' onClick={handleShow}            >
            <img src={imgbutton} alt="button.." 
            />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Avatar className="avatar" />
                    <h1 className='username'>{username}</h1>
                    {/* <button onClick={logout}>logout</button> */}
                    <h4 className="isisidebar" href="">Explore</h4>
                    <h4 className="isisidebar" href="">History</h4>
                    <AddModal />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar;