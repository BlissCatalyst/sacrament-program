import React, { useState, useEffect, useRef } from "react";

import Navigation from "./Navigation/Navigation.js";
import NavMenu from "./NavMenu/NavMenu.js";

export default function Header() {
    const [showNavMenu, setShowNavMenu] = useState(false);

    const navigationStyling = useRef("");
    useEffect(() => {
        if (!showNavMenu) {
            navigationStyling.current = "navMenuOpen";
        } else {
            navigationStyling.current = "";
        }
    });

    return (
        <div className="App-header">
            <div className="Header-title">
                <div>
                    <h1>Program Generator</h1>
                </div>
            </div>
            <Navigation
                showNavMenu={showNavMenu}
                setShowNavMenu={setShowNavMenu}
                navigationStyling={navigationStyling.current}
            />
            {showNavMenu && (
                <NavMenu
                    showNavMenu={showNavMenu}
                    setShowNavMenu={setShowNavMenu}
                />
            )}
        </div>
    );
}
