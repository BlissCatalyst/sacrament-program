import React, { useState } from "react";

export default function Navigation(props) {
    const [changeNavColor, setChangeNavColor] = useState("");
    const changeClassName = () => {
        props.handleClick();
        console.log(props.showNavMenu);
        if (props.showNavMenu === false) {
            setChangeNavColor("navMenuOpen");
        } else {
            setChangeNavColor("");
        }
    };

    return (
        <div
            className={`Navigation ${changeNavColor}`}
            onClick={changeClassName}
        >
            <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
    );
}
