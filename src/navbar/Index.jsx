import "./navbar.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../assets/img/logo.png'
import sidebar from '../assets/img/sidebar.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="row">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <input className="btn" type="image" src={sidebar} data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"/>
                            {/* navbar categories */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Categories
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Annother action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else</a>
                                    </li>
                                </ul>
                            </li>
                            {/* all time */}
                            <li className="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    All Time
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                            {/* searchbar */}
                            
                                <form className="col-md-4 d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                </form>
                            

                            {/* logo */}
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
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </nav>
        // sidebar

    );
};

export default Navbar;