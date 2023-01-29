import React from "react";
import Hero from "./Info/hero";
import Layout from "../components/layout/layout";
import InfoComponent from "./Info/info";

const Info = () => {
    return (
        <Layout>
            <Hero />
            <InfoComponent />
        </Layout>
    );
};

export default Info;
