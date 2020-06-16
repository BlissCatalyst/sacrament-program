import React from "react";
import { Link } from "react-router-dom";

export default function NavMenu() {
    return (
        <div className="NavMenu">
            <h3>NavMenu</h3>
            <Link to="/login">Login</Link>
        </div>
    );
}
