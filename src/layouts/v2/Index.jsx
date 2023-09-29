import "./Detail.css";
import PropTypes from "prop-types";
import backbutton from "../../assets/img/Back Button.png";
import { useParams } from 'react-router-dom';

const LayoutDetail = ({ book }) => {
    const { id } = useParams();
    const selectedItem = book.find(item => item.id === id);

    if (!selectedItem) {
        return <p>Item not found.</p>;
    }

    return (
        <main className="detailcontainer">
            <section className="top">
                <div className="topmodal">
                    <a type="button" className="topedit" id="modaledit">
                        Edit
                    </a>
                    <a className="topdelete" type="button" id="modaldelete">
                        Delete
                    </a>
                </div>
            </section>
            <section className="bottom">
                <div className="bottomtitle">
                    <div>
                        <button type="button" className="btn btn-warning">
                            Novel
                        </button>
                        <h1>{selectedItem.book.title}</h1>
                        <h6>{selectedItem.book.date}</h6>
                    </div>
                    <div className="stock">
                        <h5>{selectedItem.book.stock}</h5>
                    </div>
                </div>
                <div className="detailisi">
                    <div className="paragrafdilan">
                        <p>{selectedItem.book.description}</p>
                    </div>
                    <div className="buttonborrow">
                        <button className="btn btn-warning" id="borrowModal">
                            Borrow
                        </button>
                    </div>
                </div>
            </section>
            {/* Modal components */}
        </main>
    );
};

LayoutDetail.propTypes = {
    book: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LayoutDetail;
