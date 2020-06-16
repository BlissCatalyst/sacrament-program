import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Header/Header.js";

import Login from "../Login/Login.js";
import Landing from "../landing/Landing.js";
// import CoverPage from "./components/generator/coverPage/CoverPage.js";
import Footer from "../Footer/Footer.js";

export default function Home() {
    return (
        <>
            <header>
                <Header />
            </header>
            <section>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/landing" component={Landing} />
                </Switch>
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
