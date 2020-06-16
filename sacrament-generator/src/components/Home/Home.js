import React from "react";

import Header from "../Header/Header.js";
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
                <Landing />
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
