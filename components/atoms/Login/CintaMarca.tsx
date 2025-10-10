import React from "react";
import { Layout } from "antd";

const CintaMarca: React.FC = () => {
    return (
        <Layout
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 6,
                display: "flex",
                padding: 0,
                background: "transparent",
            }}
        >
            <Layout style={{ flex: 1, background: "#0ea5e9" }} />
            <Layout style={{ flex: 1, background: "#ffffff" }} />
            <Layout style={{ flex: 1, background: "#e11d48" }} />
        </Layout>
    );
};

export default CintaMarca;
