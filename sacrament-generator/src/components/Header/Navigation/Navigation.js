import React from "react";

export default function Navigation(props) {
    return (
        <div className="Navigation" onClick={props.handleClick}>
            <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
    );
}
