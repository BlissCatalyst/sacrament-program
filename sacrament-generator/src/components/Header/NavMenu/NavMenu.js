import React from "react";
import { Link } from "react-router-dom";

export default function NavMenu(props) {
    return (
        <div className="NavMenu" onClick={() => props.setShowNavMenu(false)}>
            <h3>NavMenu</h3>
            <Link to="/login">Login</Link>
        </div>
    );
}
