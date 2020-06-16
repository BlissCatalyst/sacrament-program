import React, { useState } from "react";

import Navigation from "./Navigation/Navigation.js";
import NavMenu from "./NavMenu/NavMenu.js";

export default function Header() {
    const [showNavMenu, setShowNavMenu] = useState(false);
    const handleClick = () => {
        if (showNavMenu === false) {
            setShowNavMenu(true);
        } else {
            setShowNavMenu(false);
        }
    };

    return (
        <div className={`App-header`}>
            <div className={`Header-title ${showNavMenu && "showTitleShadow"}`}>
                <div>
                    <h1>Program Generator</h1>
                </div>
            </div>
            <Navigation showNavMenu={showNavMenu} handleClick={handleClick} />
            {showNavMenu && <NavMenu />}
        </div>
    );
}
