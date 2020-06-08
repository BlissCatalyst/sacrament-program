import React from "react";
import "./index.css";

import Header from "./components/Header/Header.js";
// import Landing from "./components/landing/Landing.js";
// import CoverPage from "./components/generator/coverPage/CoverPage.js";

import Footer from "./components/Footer/Footer.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
            </header>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
