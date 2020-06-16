import React from "react";
import "./index.css";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home.js";

function App() {
    return (
        <div className="App">
            <Route path="/" component={Home} />
        </div>
    );
}

export default App;
