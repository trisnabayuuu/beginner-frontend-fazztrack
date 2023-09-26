import React from 'react';
import Navbar from '../../navbar/Index.jsx'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Cardview from '../../card/Index.jsx';
import Carrouselview from '../../carousel/Index.jsx';

function Home() {

    return (
        <div >
            <Navbar style={{
            // width:"100vw",  
            borderBottom: "4px inset"
            }}/>
            <Carrouselview />
            <Cardview />
        </div>
    );
}
export default Home;