import React from "react";
import Layout from "../components/layout/layout";
import Hero from "./Contact/hero";
import Info from "./Contact/info";
import Support from "./Contact/support";

const Contact = () => {
    return (
        <Layout>
            <Hero />
            <Info />
            <Support />
        </Layout>
    );
};

export default Contact;
