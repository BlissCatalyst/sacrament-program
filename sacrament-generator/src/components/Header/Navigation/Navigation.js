import React from "react";

export default function Navigation(props) {
    return (
        <div
            className={`Navigation ${props.navigationStyling}`}
            onClick={() => {
                if (props.showNavMenu) {
                    props.setShowNavMenu(false);
                } else {
                    props.setShowNavMenu(true);
                }
            }}
        >
            <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
    );
}
