import React from 'react'
import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div className="Home__container">
            This is Home Component.
            <Link to="/add">Button</Link>
        </div>
        
    )
}

export default Home
