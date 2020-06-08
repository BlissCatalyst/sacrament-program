import React from "react";

import Navigation from "./Navigation/Navigation.js";

export default function Header() {
    return (
        <div className="App-header">
            <div className="Header-title">
                <div>
                    <h1>Program Generator</h1>
                </div>
            </div>
            <Navigation />
        </div>
    );
}
