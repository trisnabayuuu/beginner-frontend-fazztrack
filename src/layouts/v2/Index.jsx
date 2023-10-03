import { useState, useEffect } from "react";
import "./Detail.css";
import backbutton from "../../assets/img/Back Button.png"
// import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EditModal from "../../modals/edit/Index";
import DeleteModal from "../../modals/delete/Index";


const LayoutDetail = ({ book }) => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const [image, setImage] = useState({});

    const navigateregis = useNavigate();
    const routeHome = () => {
        navigateregis(`/`);
    };

    
    const fetchBook = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:9010/book/${id}`);
            if (response.ok) {
                const data = await response.json();
                setDetail(data);
                // console.log(data.data.imageUrl);
                setImage(data.data?.imageUrl);
                console.log(data)
            } else {
                console.error(`Error  ${id}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        fetchBook();
    }, [id]);


    const borrowbook = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:9010/book/borrowed/${id}`, {
                method: 'POST',
            });
            if (response.ok) {
                const responseData = await response.json();
                // console.log(responseData.message);
                alert(responseData.message);
            } else {
                console.error(`Error borrowed book with id ${id}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (

        <main className="detailcontainer">
            <section className="top" style={{ backgroundImage: `url(${image})` }}>
                <div>
                    <img src={backbutton} alt="back..." onClick={routeHome} />
                </div>
                <div className="topmodal">
                    <EditModal id={id} />
                    <DeleteModal />
                </div>
            </section>
            <section className="bottom">
                <div className="bottomtitle">
                    <div>
                        <button type="button" className="btn btn-warning">
                            Novel
                        </button>
                        <h1>{detail.data?.title}</h1>
                        <h6>{detail.data?.createdAt}</h6>
                    </div>
                    <div className="stock">
                        <h5>{detail.data?.status}</h5>
                    </div>
                </div>
                <div className="detailisi">
                    <div className="paragrafdilan">
                        <p>{detail.data?.description}</p>
                    </div>
                    <div className="buttonborrow">
                        <button className="btn btn-warning" id="borrowModal" onClick={borrowbook}>
                            Borrow
                        </button>
                    </div>
                </div>
            </section>
        </main>
        
    );
};


export default LayoutDetail;
