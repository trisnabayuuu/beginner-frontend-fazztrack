import "./navbar.css";
import logo from '../assets/img/logo.png';
import SideBar from "../offcanvas/Index";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import iconsearch from '../assets/img/search.svg'


const Navbarview = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                
                <SideBar/>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        // style={{ maxHeight: '100px' }}
                        
                    >
                        <NavDropdown title="All Categories" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="All Time" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                    {/* <img src={iconsearch} alt="" /> */}
                        <Form.Control 
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            
                    </Form>
                    <div className="logo" 

                            style={{ 
                                display:"flex",
                                alignItems:"center"
                            }}>
                                <img src={logo} alt="logo..." 

                                style={{ 
                                    height:"54px",
                                    width:"50px"
                                }}/>

                            <h5>Library</h5>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbarview;