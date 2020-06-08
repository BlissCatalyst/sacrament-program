import React from "react";
import "./index.css";

import Landing from "./components/landing/Landing.js";
import CoverPage from "./components/generator/coverPage/CoverPage.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Landing />
            </header>
            <CoverPage />
        </div>
    );
}

export default App;
