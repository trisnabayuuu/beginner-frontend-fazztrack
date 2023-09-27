import "./auth.css";
// import bgimg from "../../assets/img/login logout image.png";
import PropTypes from "prop-types";

const LayoutAuth = ({ children }) => {
    return (
        <div className="d-flex auth-wrapper bg-info bg-opacity-50">
            <div className="left bg-primary bg-opacity-25">
                {/* <img src={bgimg} alt="bgimg" /> */}
                <h1 className="text-left1">Book is window</h1>
                <h1 className="text-left2">to the world</h1>

            </div>
            {/* styling section */}
            <div className="right d-flex justify-content-center align-items-center">
                {children}
            </div>
        </div>
    );
};

LayoutAuth.propTypes = {
    children: PropTypes.element,
};

export default LayoutAuth;