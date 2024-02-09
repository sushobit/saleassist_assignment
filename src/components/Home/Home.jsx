import React from "react";
import { Link } from "react-router-dom";
import Services from "../Services/Services";
import About from "../About/About";
import Wrapper from "../Wrapper/Wrapper";
export default function Home() {
    return (
        <>
        <Wrapper/>
        <Services/>
        <About/>
        </>
    );
}
